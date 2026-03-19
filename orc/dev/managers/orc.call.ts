import { Shared } from "./orc.shared"
import { OrchestratorPageModel, OrchestratorPageComponentModel } from "../models/orc.abstractions";
import { getPrototypeMethods, isNullOrWhitespace } from "../models/orc.utility"


/**
 * This method is used to call 
 * methods between components or to the main page
 * @param type 
 * @param name 
 * @param args 
 * @returns 
 */
export function CallMethod(type : any, name: string, ...args: any[]){
    if (Shared._page && !isNullOrWhitespace(name)){
        if ((type.prototype instanceof OrchestratorPageModel)){
            if (typeof(type.prototype) === typeof(Shared._page)){
                if (!getPrototypeMethods(OrchestratorPageModel.prototype).includes(name)){
                    const method = (Shared._page as any)[name];
                    if (typeof method === "function"){
                        return method.apply(Shared._page, args);
                    }
                }
            }
        }
        else if (type.prototype instanceof OrchestratorPageComponentModel) {
            if (Shared._components) {
                if (!getPrototypeMethods(OrchestratorPageComponentModel.prototype).includes(name)){
                    const component = Shared._components.find(c => c.name === type.name);
                    if(component) {
                        const method = (component.instance as any)[name];
                        if (typeof method === "function"){
                            return method.apply(component.instance, args);
                        }
                    }
                }
            }
        }           
    }

    return undefined;
}

/**
 * Calls a specific method on all registered components that
 * do NOT belong to the base model
 * @param methodName
 * @param args
 * @returns
 */
export function CallAllMethod(name: string, ...args: unknown[]) {
    let results : any[] | undefined;

    if(!isNullOrWhitespace(name)){
        if(Shared._page && Shared._components){
            if(!getPrototypeMethods(OrchestratorPageComponentModel.prototype).includes(name)){
                results = results ?? [];
                Shared._components.forEach(element => {
                    const method = (element.instance as any)[name];
                    if (typeof method === "function"){
                        const result = method.apply(element.instance, args);
                        results!.push({ from: element.name, result: result });
                    }
                })
            }
        }
    }

    return results;
}

/**
 * This method is used to get current instance values
 * 'render': get current page render mode
 * @param option
 * @returns 
 */
export function GetOrchestratorInstanceValue(option: string){
    if(option === "render"){
        if(Shared._page && Shared._mode){
            return Shared._mode;
        }

        return undefined;
    }
    
    throw new Error("The selected option is invalid")
}

