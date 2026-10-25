import artifact from '@actions/artifact'
const result = await artifact.uploadArtifact('payload', ['payload.json'], process.cwd(), {skipArchive: true})
console.log('ARTIFACT_ID=' + result.id)
