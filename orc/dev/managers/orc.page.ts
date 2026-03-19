import { Shared } from "./orc.shared"
import { OrchestratorViewMode } from "../models/orc.enum";
import { OrchestratorPageModel } from "../models/orc.abstractions";

/**
 *  This method is used to register main page
 * @param page
 * @param args 
 */
export function PageRegistration(page: typeof OrchestratorPageModel, ...args: any[]){
    if (!Shared._page){
        if (!(page.prototype instanceof OrchestratorPageModel) || page === OrchestratorPageModel){
            throw new Error("The orchestrator page class is not valid");
        }
        const _page = new page()
        const _initializationMethod = (_page as any)["OnInit"];
        if (typeof _initializationMethod === "function"){
            _initializationMethod.apply(_page, args);
            Shared._page = _page;
        }
    }
}

/**
 * This method is used to change page render mode
 * @param mode
 */
export function PageRenderChange(mode: OrchestratorViewMode){
    if (Shared._page){
        if(Object.values(OrchestratorViewMode).includes(mode)){
            Shared._mode = mode;
            Shared._page.OnPageRenderChange(mode);
        }
    }
}