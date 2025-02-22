Java.perform(() => {
    let Activity = Java.use("android.app.Activity");
    Activity.onResume.implementation = function() {
        console.log("Activity: " + this.getClass().getName());
        this.onResume();
    }
});