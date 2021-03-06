import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import * as _ from "../config";

export const env = _.env;
export const org = _.org;

export const createdBy = _.createdBy;
export const createdTimestamp = _.createdTimestamp;

let engineVersion = ():string => {
    return gcp.container.getEngineVersions().latestMasterVersion;
}

export const enableKubernetesAlpha = _.booleanPropertyOf('enableKubernetesAlpha', () => false);
export const masterVersion = _.stringPropertyOf("masterVersion", engineVersion);
export const enableLegacyAbac = _.booleanPropertyOf("enableLegacyAbac", () => true);

export const nodeMachineType = _.stringPropertyOf("nodeMachineType", () => "n1-standard-8");
export const imageType = _.stringPropertyOf("imageType", () => "COS_CONTAINERD");
export const minNodeCount = _.numberPropertyOf("minNodeCount", () => 1);
export const maxNodeCount = _.numberPropertyOf("maxNodeCount", () => 3);
export const nodePreemptible = _.booleanPropertyOf("nodePreemptible", () => false);
export const nodeDiskSize = _.numberPropertyOf("nodeDiskSize", () => 100);
export const autoUpgrade = _.booleanPropertyOf("autoUpgrade", () => true);
export const autoRepair = _.booleanPropertyOf("autoRepair", () => true);
