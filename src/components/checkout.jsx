import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51IpqSaAvO61I5XZRj77hWRG7epQ8fnU632M5wF2tr305UFYMpjqFwiIxmnjOdPD1cyicOWb99iYdEUzyvE5g8Con00cg4nIZOX");

export default function Checkout() {

    const [message, setMessage] = useState("");

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive a confirmation at the email address you signed in with. Please check your mailbox.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled! Please have a look around and book someone that can help you when you are ready."
            );
        }
    }, [message]);

    const handleClick = async () => {
        const stripe = await stripePromise;
        const response = await fetch("/api/create-checkout-session", {
            method: "POST",
        });
        const session = await response.json();
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
    };

    return message ? (
        <section>
            <p>{message}</p>
        </section>
    ) : (
            <section>
                <button
                    type="button"
                    id="checkout-button"
                    role="link"
                    onClick={handleClick}>
                    Checkout
            </button>
            </section>
        );
}
