/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 09/07/2024 - 15:48:50
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/07/2024
    * - Author          : Hp
    * - Modification    : 
**/
// src/core/config/env.ts

import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
	PORT: get('PORT').required().asPortNumber(),
	API_PREFIX: get('DEFAULT_API_PREFIX').default('/api/v1').asString(),
	NODE_ENV: get('NODE_ENV').default('development').asString(),
	MONGO_INITDB_ROOT_USERNAME: get('MONGO_INITDB_ROOT_USERNAME').default('admin').asString(),
	MONGO_INITDB_ROOT_PASSWORD: get('MONGO_INITDB_ROOT_PASSWORD').default('test123').asString(),
	MONGO_DB_NAME: get('MONGO_DB_NAME').default('worketyamo').asString(),
// info personnel
    EMAIL_USER:"wilfriedclementedzengafana7@gmail.com",
    EMAIL_PASS:"kluy dqka klfd lgmi",
    JWT_SECRET : "sdfgjhkljkuhgyjdrfjhkljhdfgrsedtgfhjklhdfghjnk"

};
// Implementing regex:
export const regex= {
    EMAIL_REGEX : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    PASSWORD_REGEX : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    testRegex : (regexo:RegExp,prop:string):boolean =>{
                    return regexo.test(prop)
    }
}

export const CONNECTION_STRING = `mongodb://${envs.MONGO_INITDB_ROOT_USERNAME}:${envs.MONGO_INITDB_ROOT_PASSWORD}@172.28.0.2:27017/${envs.MONGO_DB_NAME}?authSource=admin`;
