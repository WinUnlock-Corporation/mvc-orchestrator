import { OrchestratorViewMode } from "../models/orc.enum";
import { OrchestratorPageModel } from "../models/orc.abstractions";
import { OrchestratorPageComponentInterface } from "../models/orc.interfaces";

export const Shared: {
  _page?: OrchestratorPageModel;
  _mode?: OrchestratorViewMode;
  _components?: OrchestratorPageComponentInterface[];
} = {
  _page: undefined,
  _mode: undefined,
  _components: undefined,
};
