import * as core from '@actions/core'
import artifact from '@actions/artifact'

export async function run() {
  try {
    const result = await artifact.uploadArtifact(
      'payload',
      ['payload.json'],
      process.cwd(),
      { skipArchive: true }
    )
    core.info(`ARTIFACT_ID=${result.id}`)
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}
