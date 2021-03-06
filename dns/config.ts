import * as gcp from "@pulumi/gcp";
import * as _ from "../config";

export let env = _.env;
export let org = _.org;

export let rfc1035 = _.rfc1035;

export let clusterName = `jxlabs-nos-${env}`
export let gcpProject = gcp.config.project;
