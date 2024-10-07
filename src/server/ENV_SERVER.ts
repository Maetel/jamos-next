/* DO NOT EDIT! THIS IS AUTO-GENERATED FILE */
import ENV_PUBLIC from "../ENV_PUBLIC";
export default class ENV_SERVER extends ENV_PUBLIC {
  ////////////////////////////////////////////////////////////////////////
  // Common Area

  static MONGO_URL = (process.env.MONGO_URL_OVERRIDE ??
    process.env.MONGO_URL) as string;

  static FIREBASE_APIKEY = (process.env.FIREBASE_APIKEY_OVERRIDE ??
    process.env.FIREBASE_APIKEY) as string;

  static FIREBASE_AUTHDOMAIN = (process.env.FIREBASE_AUTHDOMAIN_OVERRIDE ??
    process.env.FIREBASE_AUTHDOMAIN) as string;

  static FIREBASE_PROJECTID = (process.env.FIREBASE_PROJECTID_OVERRIDE ??
    process.env.FIREBASE_PROJECTID) as string;

  static FIREBASE_STORAGEBUCKET = (process.env
    .FIREBASE_STORAGEBUCKET_OVERRIDE ??
    process.env.FIREBASE_STORAGEBUCKET) as string;

  static FIREBASE_MESSAGINGSENDERID = (process.env
    .FIREBASE_MESSAGINGSENDERID_OVERRIDE ??
    process.env.FIREBASE_MESSAGINGSENDERID) as string;

  static FIREBASE_APPID = (process.env.FIREBASE_APPID_OVERRIDE ??
    process.env.FIREBASE_APPID) as string;

  static FIREBASE_MEASUREMENTID = (process.env
    .FIREBASE_MEASUREMENTID_OVERRIDE ??
    process.env.FIREBASE_MEASUREMENTID) as string;
  ////////////////////////////////////////////////////////////////////////
  // Forked Area

  ////////////////////////////////////////////////////////////////////////
  // Init Area
  static is_ENV_SERVER_init = false;
  static init_ENV_SERVER = () => {
    ENV_SERVER.init_ENV_PUBLIC();

    if (ENV_SERVER.is_ENV_SERVER_init) {
      return;
    }
    if (!(ENV_SERVER.IS_DEV || ENV_SERVER.IS_PROD || ENV_SERVER.IS_QA)) {
      throw new Error("Invalid NODE_ENV: " + ENV_SERVER.DST_ENV);
    }

    const variables = {
      IS_DEV: ENV_SERVER.IS_DEV,
      IS_PROD: ENV_SERVER.IS_PROD,
      IS_QA: ENV_SERVER.IS_QA,
      IS_DEV_OR_QA: ENV_SERVER.IS_DEV_OR_QA,
      MONGO_URL: ENV_SERVER.MONGO_URL,
      FIREBASE_APIKEY: ENV_SERVER.FIREBASE_APIKEY,
      FIREBASE_AUTHDOMAIN: ENV_SERVER.FIREBASE_AUTHDOMAIN,
      FIREBASE_PROJECTID: ENV_SERVER.FIREBASE_PROJECTID,
      FIREBASE_STORAGEBUCKET: ENV_SERVER.FIREBASE_STORAGEBUCKET,
      FIREBASE_MESSAGINGSENDERID: ENV_SERVER.FIREBASE_MESSAGINGSENDERID,
      FIREBASE_APPID: ENV_SERVER.FIREBASE_APPID,
      FIREBASE_MEASUREMENTID: ENV_SERVER.FIREBASE_MEASUREMENTID,
    };
    const isNullish = (val: string) =>
      val === undefined || val === null || val?.length === 0;

    const missing = Object.keys(variables)
      .filter((key) => isNullish(variables[key]))
      .filter((key) => !key.toLowerCase().startsWith("nullable_"));

    if (missing.length > 0) {
      throw new Error(
        ".env.local에 환경변수를 추가해주세요 : " + missing.join(", "),
      );
    }
    ENV_SERVER.is_ENV_SERVER_init = true;
  };

  ////////////////////////////////////////////////////////////////////////
  // toObject Area
  static toObject(): { [key: string]: any } {
    const obj: { [key: string]: any } = ENV_PUBLIC.toObject();

    Object.getOwnPropertyNames(this).forEach((key) => {
      const value = this[key as keyof typeof ENV_SERVER];
      if (typeof value === "string") {
        obj[key] = value;
      }
    });

    return obj;
  }
}
ENV_SERVER.init_ENV_SERVER();
