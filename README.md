# Running a basic Node app in GKE

Posting different manifests to Google Kubernettes Engine:

* in namespaces
* with labels and annotations; in the following illustration each pod is labeled with two labels: 

app , which specifies which app, component, or microservice the pod belongs to.
rel , which shows whether the application running in the pod is a stable, beta, or a canary release. (a software release can be: stable, beta, canary, and so on)

![label-release](https://github.com/ckodalo/basicApp/assets/48943229/6cd6abe6-03b0-4d2b-a6a1-4f8a8e2a0ba0)

* with liveness-probe
* in replicasets

The actual act of managing the replicated Pods is an example of a reconciliation loop. 

![recon-loop](https://github.com/ckodalo/basicApp/assets/48943229/25467b79-dbde-469b-afd2-573ae485365e)

