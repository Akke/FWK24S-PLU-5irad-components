import React from "react";
import { createRoutesFromElements, Route } from "react-router-dom";

const Placeholder = () => <h1>Placeholder</h1>;

export function getRouteElements() {
    return createRoutesFromElements(
        <Route path="/" element={<Placeholder />} />
    );
}
