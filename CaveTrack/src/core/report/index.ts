
import { Options } from "../../type";
import { optionsInit } from "./src/init";

class report {
    init (options: Options)  {
        return optionsInit(options)
    }
}

const reportObj = new report()

export default reportObj