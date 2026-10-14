document.addEventListener("DOMContentLoaded", function () {

    const getStartedBtn = document.getElementById("getStartedBtn");
    const backHomeBtn = document.getElementById("backHomeBtn");
    const dashboard = document.getElementById("dashboard");

    if (getStartedBtn && dashboard) {
        getStartedBtn.addEventListener("click", function () {

            dashboard.classList.remove("hidden");

            dashboard.scrollIntoView({
                behavior: "smooth"
            });

        });
    }

    if (backHomeBtn && dashboard) {
        backHomeBtn.addEventListener("click", function () {

            dashboard.classList.add("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }

});

function openService(serviceName) {
    if (serviceName === "Buy Data") {
        window.location.href = "buy-data.html";
        return;
    }

    function openService(service) {
    if (service === "Buy Data") {
        window.location.href = "buy-data.html";
        return;
    }

    if (service === "Buy Airtime") {
        window.location.href = "buy-airtime.html";
        return;
    }

    alert(service + " service is coming soon.");
}