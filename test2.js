CP - Condition

Feature('POST')

Scenario('create user', async ({ I }) => {
    // this way we pass Bearer token
  I.amBearerAuthenticated(secret('eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJzdXBlcl9hZG1pbiI6ZmFsc2UsInJvbGUiOiJjYXJlX3Byb3ZpZGVyIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hpcGFpLW1vYmlsZS10ZXN0IiwiYXVkIjoiaGlwYWktbW9iaWxlLXRlc3QiLCJhdXRoX3RpbWUiOjE3MTU4MzU1MjEsInVzZXJfaWQiOiJGcUxjT3hwcTRBWm1tbXU4RnVlZnNZYkVnRXoxIiwic3ViIjoiRnFMY094cHE0QVptbW11OEZ1ZWZzWWJFZ0V6MSIsImlhdCI6MTcxNTgzNTUyMSwiZXhwIjoxNzE1ODM5MTIxLCJlbWFpbCI6ImRhYmNAeW9wbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfbnVtYmVyIjoiKzkxNzg3NTQ0NTQ3OCIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFiY0B5b3BtYWlsLmNvbSJdLCJwaG9uZSI6WyIrOTE3ODc1NDQ1NDc4Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GNXiuvxX-T40hQhEg_MbtiJkNApYP0pyX1iqqYFB2hk7F2HbqxkwudAYOv1bWt8vdJ5iiqBfiaWGXJPilcrFBC8xfDi3YBZfbRvdWW83Fl-yq430iX9vx0CMPaCQ_LY8aNlgFJ0pvEbrzqY09MJpbtk-3wBFIt6Ir30dWJCVTbCAIltASxQpY7M8lFL9MGZY8UOjTbGUems0bE5sqAPRfTik1A3Jx_UCUw7CdwLBgEvZYUOg7S6Ul9jGeB1eQ8kQhRrdoIhHVi2a2WTckWnsnkVAXCJHlpdo-uTcxS5lpl_SwfqhiDyAN6C8FRT9wfvCo7lYojvs-YBces935gDu3Q'));
  // for custom authorization with headers use
  // I.haveRequestHeaders method

// here we send a Post request
const response = await I.sendPostRequest('https://hipai-gateway-3phr2r75nq-uc.a.run.app/hipai/v1/cp-condition',
    {
        "cpuid":"m4XMOtCJDiVG4o4betJCQrN2JQH3",
        "name":"cold",
        "timestamp": 168002560,
        "date":"02 jan 2023",
        "appoinmentId":"fTHKJDDzUWcSh6qusJSp",
        "patientId":"0MDiqYttO6QtQysNJK8W"
    })
console.log(response.data);
// check the last request was successful
// this method introduced by JSONResponse helper
I.seeResponseCodeIsSuccessful(200);
});