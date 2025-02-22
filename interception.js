Java.perform(()=>{
    let Fragment = Java.use("androidx.fragment.app.Fragment");
    Fragment.onResume.implementation = function(){
        console.log("Fragment: " + this.getClass().getName());
        this.onResume();
    }

    let InterceptionFragment = Java.use("com.example.ui.InterceptionFragment");
    InterceptionFragment.license_check.implementation = function(){
        console.log("InterceptionFragment: license_check");
        this.license_check();
    }

    InterceptionFragment.license_check_2.implementation = function(){
        console.log("InterceptionFragment: license_check_2");
        this.license_check_2();
    }

    let LicenseManager = Java.use("com.example.LicenseManager");
    LicenseManager.isLicenseValid.implementation = function(){
        console.log("LicenseManager: isLicenseValid");
        return true;
    }

    let FlagCryptor = Java.use("com.example.FlagCryptor");
    console.log(FlagCryptor.decode("VUtHe3ZhZ3JlcHJjZ3ZhdC1ndnpyLXZmLXJuZmx9"));
})