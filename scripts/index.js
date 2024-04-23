
import selectedTrip from "./dom/trip.js";
import menuBtn from "./menubtn.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
    selectedTrip(".trip", ".form-modal", "#close"),
    menuBtn(".menu-btn", ".menu", ".menu a")
});