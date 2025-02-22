Java.perform(() => {
    let FlagClass = Java.use("com.example.FlagClass");
    let FlagInstance = FlagClass.$new();
    console.log("Instance of FlagClass created");
    console.log("flagFromStaticMethod: " + FlagInstance.flagFromStaticMethod());
    console.log("flagFromInstanceMethod: " + FlagInstance.flagFromInstanceMethod());
    console.log("flagIfYouCallMeWithSesame: " + FlagInstance.flagIfYouCallMeWithSesame("sesame"));
})