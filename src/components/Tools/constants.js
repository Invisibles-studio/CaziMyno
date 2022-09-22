
export class Constants{

    // ==== FIREBASE ====
    static firebase_api_key = "AIzaSyAGBebOOaI5IJ6NPhbefOP8JZ4mjoajyyw"//process.env.FIREBASE_API_KEY
    static firebase_auth_domain = "domino-invisibles.firebaseapp.com"//process.env.FIREBASE_AUTH_DOMAIN
    static firebase_database_url = "https://domino-invisibles-default-rtdb.firebaseio.com"//process.env.FIREBASE_DATABASE_URL
    static  firebase_project_id = "domino-invisibles"//process.env.FIREBASE_PROJECT_ID
    static firebase_storage_bucket = "domino-invisibles.appspot.com"//process.env.FIREBASE_STORAGE_BUCKET
    static firebase_messaging_sender_id = "960014491877"//process.env.FIREBASE_MESSAGING_SENDER_ID
    static firebase_app_id = "1:960014491877:web:46a302b3b11273cb9bb40c"//process.env.FIREBASE_APP_ID
    static firebase_measurement_id = "G-V1JXT1WZ23"//process.env.FIREBASE_MEASUREMENT_ID

    static firebase_config = {
        apiKey: Constants.firebase_api_key,
        authDomain: Constants.firebase_auth_domain,
        databaseURL: Constants.firebase_database_url,
        projectId: Constants.firebase_project_id,
        storageBucket: Constants.firebase_storage_bucket,
        messagingSenderId: Constants.firebase_messaging_sender_id,
        appId: Constants.firebase_app_id,
        measurementId: Constants.firebase_measurement_id
    }
}