import { Shared } from "./orc.shared"
import { OrchestratorViewMode } from "../models/orc.enum";
import { OrchestratorPageComponentModel } from "../models/orc.abstractions";

/**
 * This method is used to assign a component to the page. 
 * The component must extend the OrchestratorPageComponentModel base class.
 * @param component 
 * @param args
 */
export function PageComponentRegistration(component : typeof OrchestratorPageComponentModel, ...args: any[]){
    if (Shared._page){
        if (!(component.prototype instanceof OrchestratorPageComponentModel) || component === OrchestratorPageComponentModel){
            throw new Error("The orchestrator component class is not valid");
        }

        Shared._components = Shared._components ?? [];

        if(!Shared._components.some(e => e.name == component.name)){
            const _element = { name: component.name, instance: new component() };
            const _initializationMethod = (_element.instance as any)["OnInit"];
            if (typeof _initializationMethod === "function"){
                _initializationMethod.apply(_element.instance, args);
                if (Shared._mode){
                    _element.instance.OnComponentRenderChange(Shared._mode);
                }
                Shared._components.push(_element);
            }
        }
    }
}

/**
 * This method is used to change render in the all page component
 * @param mode 
 */
export function PageAllComponentsRenderChange(mode : OrchestratorViewMode){
    if (Shared._page && Shared._components){
        if(Object.values(OrchestratorViewMode).includes(mode)){
            Shared._components.forEach(element => {
                element.instance.OnComponentRenderChange(mode);
            })
        }
    }
}