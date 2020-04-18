import { exec } from "@actions/exec"
import * as core from "@actions/core"

const onError = (error: Error) => core.setFailed(error.message)

const run = async () => {
   const repository = core.getInput("repository")
   const tag = core.getInput("tag")

   return exec(`docker build -t ${repository}:${tag} .`)
}

process.setUncaughtExceptionCaptureCallback(onError)

run().catch(onError)
