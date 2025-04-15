"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import { loadSeller, loadUser } from "@/redux/actions/user";
import { getAllProducts } from "@/redux/actions/product";
import { getAllEvents } from "@/redux/actions/event";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../lib/server";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export function Providers({ children }) {
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get(`${server}/payment/stripeapikey`);
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error("Error fetching Stripe API key:", error);
    }
  }

  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadSeller());
    store.dispatch(getAllProducts());
    store.dispatch(getAllEvents());
    getStripeApiKey();
  }, []);

  return (
    <Provider store={store}>
      {stripeApiKey ? (
        <Elements stripe={loadStripe(stripeApiKey)}>{children}</Elements>
      ) : (
        <>{children}</>
      )}
    </Provider>
  );
}