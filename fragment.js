Java.perform(() => {
    let Fragment = Java.use("androidx.fragment.app.Fragment");
    Fragment.onResume.implementation = function() {
        console.log("Fragment: " + this.getClass().getName());
        this.onResume();
    }
});