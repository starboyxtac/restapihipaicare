//CP - Medicine

//postCP - Medicine------------------------------------  ----------------        
// addMedicine-----------------------------------------------------------------
// Feature('POST')

// Scenario('create user', async ({ I }) => {
//     // this way we pass Bearer token
//   I.amBearerAuthenticated(secret('eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJzdXBlcl9hZG1pbiI6ZmFsc2UsInJvbGUiOiJjYXJlX3Byb3ZpZGVyIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hpcGFpLW1vYmlsZS10ZXN0IiwiYXVkIjoiaGlwYWktbW9iaWxlLXRlc3QiLCJhdXRoX3RpbWUiOjE3MTU4MzU1MjEsInVzZXJfaWQiOiJGcUxjT3hwcTRBWm1tbXU4RnVlZnNZYkVnRXoxIiwic3ViIjoiRnFMY094cHE0QVptbW11OEZ1ZWZzWWJFZ0V6MSIsImlhdCI6MTcxNTgzNTUyMSwiZXhwIjoxNzE1ODM5MTIxLCJlbWFpbCI6ImRhYmNAeW9wbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfbnVtYmVyIjoiKzkxNzg3NTQ0NTQ3OCIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFiY0B5b3BtYWlsLmNvbSJdLCJwaG9uZSI6WyIrOTE3ODc1NDQ1NDc4Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GNXiuvxX-T40hQhEg_MbtiJkNApYP0pyX1iqqYFB2hk7F2HbqxkwudAYOv1bWt8vdJ5iiqBfiaWGXJPilcrFBC8xfDi3YBZfbRvdWW83Fl-yq430iX9vx0CMPaCQ_LY8aNlgFJ0pvEbrzqY09MJpbtk-3wBFIt6Ir30dWJCVTbCAIltASxQpY7M8lFL9MGZY8UOjTbGUems0bE5sqAPRfTik1A3Jx_UCUw7CdwLBgEvZYUOg7S6Ul9jGeB1eQ8kQhRrdoIhHVi2a2WTckWnsnkVAXCJHlpdo-uTcxS5lpl_SwfqhiDyAN6C8FRT9wfvCo7lYojvs-YBces935gDu3Q'));
//   // for custom authorization with headers use
//   // I.haveRequestHeaders method

// // here we send a Post request
// const response = await I.sendPostRequest('https://hipai-gateway-3phr2r75nq-uc.a.run.app/hipai/v1/cp-medicine', {
//     "category": "tablet",
//     "dosage": "10mg",
//     "drugName": "crocin",
//     "productId": "5663255696665",
//     "userId": "123456",
//     "medicineId": "",
//     "appoinmentId":"123",
//     "conditionId":"jkh0",
//     "timestamp": 1669786905,
//     "daysInfo": [],
//     "frequencyName": "everyday",
//     "duration":4,
//     "count":8,
//     "instructions": "tablet for fever",
//     "notification": "1",
//     "startDate": "2022-11-30  12:00:00",
//     "endDate": "",
//     "reminderTimings": [{
//     "time": "12:30",
//     "timeDesc": "before food" 
//      }]
// })


// console.log(response.data);
// // check the last request was successful
// // this method introduced by JSONResponse helper
// I.seeResponseCodeIsSuccessful(200);
// });

//putCP - Medicine---------------------------------------------------------------------------------------------------------------------------------------------------------------
// updateMedicine----------------------------------------------------------------------------------------------------------------------------------------------------

// Feature('PUT')
// Scenario('update medicine', async ({ I }) => {
//     // this way we pass Bearer token
//     I.amBearerAuthenticated(secret('eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJzdXBlcl9hZG1pbiI6ZmFsc2UsInJvbGUiOiJjYXJlX3Byb3ZpZGVyIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hpcGFpLW1vYmlsZS10ZXN0IiwiYXVkIjoiaGlwYWktbW9iaWxlLXRlc3QiLCJhdXRoX3RpbWUiOjE3MTU4MzU1MjEsInVzZXJfaWQiOiJGcUxjT3hwcTRBWm1tbXU4RnVlZnNZYkVnRXoxIiwic3ViIjoiRnFMY094cHE0QVptbW11OEZ1ZWZzWWJFZ0V6MSIsImlhdCI6MTcxNTgzNTUyMSwiZXhwIjoxNzE1ODM5MTIxLCJlbWFpbCI6ImRhYmNAeW9wbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfbnVtYmVyIjoiKzkxNzg3NTQ0NTQ3OCIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFiY0B5b3BtYWlsLmNvbSJdLCJwaG9uZSI6WyIrOTE3ODc1NDQ1NDc4Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GNXiuvxX-T40hQhEg_MbtiJkNApYP0pyX1iqqYFB2hk7F2HbqxkwudAYOv1bWt8vdJ5iiqBfiaWGXJPilcrFBC8xfDi3YBZfbRvdWW83Fl-yq430iX9vx0CMPaCQ_LY8aNlgFJ0pvEbrzqY09MJpbtk-3wBFIt6Ir30dWJCVTbCAIltASxQpY7M8lFL9MGZY8UOjTbGUems0bE5sqAPRfTik1A3Jx_UCUw7CdwLBgEvZYUOg7S6Ul9jGeB1eQ8kQhRrdoIhHVi2a2WTckWnsnkVAXCJHlpdo-uTcxS5lpl_SwfqhiDyAN6C8FRT9wfvCo7lYojvs-YBces935gDu3Q'));
//     // for custom authorization with headers use
//     // I.haveRequestHeaders method

//     // here we send a PUT request
//     const response = await I.sendPutRequest('https://hipai-cp-medicine-service-3phr2r75nq-el.a.run.app?medicineId=hpWAvfdHhBLkHFBqiICg', {
//         "category": "tablet",
//         "dosage": "10mg",
//         "drugName": "crocin",
//         "productId": "5663255696665",
//         "userId": "123456",
//         "medicineId": "hpWAvfdHhBLkHFBqiICg",
//         "appoinmentId":"123",
//         "conditionId":"jkh0",
//         "timestamp": 1669786905,
//         "daysInfo": [],
//         "frequencyName": "everyday",
//         "duration":4,
//         "count":8,
//         "instructions": "tablet for fever",
//         "notification": "1",
//         "startDate": "2022-11-30  12:00:00",
//         "endDate": "",
//         "reminderTimings": [{
//         "time": "01:30",
//         "timeDesc": "after food" 
//         }]
//     })

//     console.log(response.data);
//     // check the last request was successful
//     // this method introduced by JSONResponse helper
//     I.seeResponseCodeIsSuccessful(200);
// });

// getAllMedicine-------------------------------------------------------------------------  ----------------

// Feature('GET') //----------------------------------------------------------------

// Scenario('create user', async ({ I }) => {
//     // this way we pass Bearer token
//   I.amBearerAuthenticated(secret('eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJzdXBlcl9hZG1pbiI6ZmFsc2UsInJvbGUiOiJjYXJlX3Byb3ZpZGVyIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hpcGFpLW1vYmlsZS10ZXN0IiwiYXVkIjoiaGlwYWktbW9iaWxlLXRlc3QiLCJhdXRoX3RpbWUiOjE3MTU4MzU1MjEsInVzZXJfaWQiOiJGcUxjT3hwcTRBWm1tbXU4RnVlZnNZYkVnRXoxIiwic3ViIjoiRnFMY094cHE0QVptbW11OEZ1ZWZzWWJFZ0V6MSIsImlhdCI6MTcxNTgzNTUyMSwiZXhwIjoxNzE1ODM5MTIxLCJlbWFpbCI6ImRhYmNAeW9wbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfbnVtYmVyIjoiKzkxNzg3NTQ0NTQ3OCIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFiY0B5b3BtYWlsLmNvbSJdLCJwaG9uZSI6WyIrOTE3ODc1NDQ1NDc4Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GNXiuvxX-T40hQhEg_MbtiJkNApYP0pyX1iqqYFB2hk7F2HbqxkwudAYOv1bWt8vdJ5iiqBfiaWGXJPilcrFBC8xfDi3YBZfbRvdWW83Fl-yq430iX9vx0CMPaCQ_LY8aNlgFJ0pvEbrzqY09MJpbtk-3wBFIt6Ir30dWJCVTbCAIltASxQpY7M8lFL9MGZY8UOjTbGUems0bE5sqAPRfTik1A3Jx_UCUw7CdwLBgEvZYUOg7S6Ul9jGeB1eQ8kQhRrdoIhHVi2a2WTckWnsnkVAXCJHlpdo-uTcxS5lpl_SwfqhiDyAN6C8FRT9wfvCo7lYojvs-YBces935gDu3Q'));
//   // for custom authorization with headers use
//   // I.haveRequestHeaders method

//   // here we send a GET request
//     const response=await I.sendGetRequest('https://hipai-cp-medicine-service-3phr2r75nq-el.a.run.app?appoinmentId=123&conditionId=jkh0');

//     console.log(response.data);
//   // check the last request was successful
//   // this method introduced by JSONResponse helper
//   I.seeResponseCodeIsSuccessful(200);
// })

// //Delete
// Feature('DELETE') //----------------------------------------------------------------

// Scenario('create user', async ({ I }) => {
//     // this way we pass Bearer token
//   I.amBearerAuthenticated(secret('eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJzdXBlcl9hZG1pbiI6ZmFsc2UsInJvbGUiOiJjYXJlX3Byb3ZpZGVyIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hpcGFpLW1vYmlsZS10ZXN0IiwiYXVkIjoiaGlwYWktbW9iaWxlLXRlc3QiLCJhdXRoX3RpbWUiOjE3MTU4MzU1MjEsInVzZXJfaWQiOiJGcUxjT3hwcTRBWm1tbXU4RnVlZnNZYkVnRXoxIiwic3ViIjoiRnFMY094cHE0QVptbW11OEZ1ZWZzWWJFZ0V6MSIsImlhdCI6MTcxNTgzNTUyMSwiZXhwIjoxNzE1ODM5MTIxLCJlbWFpbCI6ImRhYmNAeW9wbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfbnVtYmVyIjoiKzkxNzg3NTQ0NTQ3OCIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFiY0B5b3BtYWlsLmNvbSJdLCJwaG9uZSI6WyIrOTE3ODc1NDQ1NDc4Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GNXiuvxX-T40hQhEg_MbtiJkNApYP0pyX1iqqYFB2hk7F2HbqxkwudAYOv1bWt8vdJ5iiqBfiaWGXJPilcrFBC8xfDi3YBZfbRvdWW83Fl-yq430iX9vx0CMPaCQ_LY8aNlgFJ0pvEbrzqY09MJpbtk-3wBFIt6Ir30dWJCVTbCAIltASxQpY7M8lFL9MGZY8UOjTbGUems0bE5sqAPRfTik1A3Jx_UCUw7CdwLBgEvZYUOg7S6Ul9jGeB1eQ8kQhRrdoIhHVi2a2WTckWnsnkVAXCJHlpdo-uTcxS5lpl_SwfqhiDyAN6C8FRT9wfvCo7lYojvs-YBces935gDu3Q'));
//   // for custom authorization with headers use
//   // I.haveRequestHeaders method

//   // here we send a GET request
//     const response=await I.sendDeleteRequest('https://hipai-gateway-3phr2r75nq-uc.a.run.app/hipai/v1/cp-medicine?medicineId=9k8mpB5GjzhYgFeR6OlK');

//     console.log(response.data);
//   // check the last request was successful
//   // this method introduced by JSONResponse helper
//   I.seeResponseCodeIsSuccessful(200);
// })

// CP - Condition============================================================================================================================================================================================

// Feature('POST')

// Scenario('create user', async ({ I }) => {
//     // this way we pass Bearer token
//   I.amBearerAuthenticated(secret('eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJzdXBlcl9hZG1pbiI6ZmFsc2UsInJvbGUiOiJjYXJlX3Byb3ZpZGVyIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hpcGFpLW1vYmlsZS10ZXN0IiwiYXVkIjoiaGlwYWktbW9iaWxlLXRlc3QiLCJhdXRoX3RpbWUiOjE3MTU4MzU1MjEsInVzZXJfaWQiOiJGcUxjT3hwcTRBWm1tbXU4RnVlZnNZYkVnRXoxIiwic3ViIjoiRnFMY094cHE0QVptbW11OEZ1ZWZzWWJFZ0V6MSIsImlhdCI6MTcxNTgzNTUyMSwiZXhwIjoxNzE1ODM5MTIxLCJlbWFpbCI6ImRhYmNAeW9wbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfbnVtYmVyIjoiKzkxNzg3NTQ0NTQ3OCIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFiY0B5b3BtYWlsLmNvbSJdLCJwaG9uZSI6WyIrOTE3ODc1NDQ1NDc4Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GNXiuvxX-T40hQhEg_MbtiJkNApYP0pyX1iqqYFB2hk7F2HbqxkwudAYOv1bWt8vdJ5iiqBfiaWGXJPilcrFBC8xfDi3YBZfbRvdWW83Fl-yq430iX9vx0CMPaCQ_LY8aNlgFJ0pvEbrzqY09MJpbtk-3wBFIt6Ir30dWJCVTbCAIltASxQpY7M8lFL9MGZY8UOjTbGUems0bE5sqAPRfTik1A3Jx_UCUw7CdwLBgEvZYUOg7S6Ul9jGeB1eQ8kQhRrdoIhHVi2a2WTckWnsnkVAXCJHlpdo-uTcxS5lpl_SwfqhiDyAN6C8FRT9wfvCo7lYojvs-YBces935gDu3Q'));
//   // for custom authorization with headers use
//   // I.haveRequestHeaders method

// // here we send a Post request
// const response = await I.sendPostRequest('https://hipai-gateway-3phr2r75nq-uc.a.run.app/hipai/v1/cp-condition',
//     {
//         "cpuid":"m4XMOtCJDiVG4o4betJCQrN2JQH3",
//         "name":"cold",
//         "timestamp": 168002560,
//         "date":"02 jan 2023",
//         "appoinmentId":"fTHKJDDzUWcSh6qusJSp",
//         "patientId":"0MDiqYttO6QtQysNJK8W"
//     })
// console.log(response.data);
// // check the last request was successful
// // this method introduced by JSONResponse helper
// I.seeResponseCodeIsSuccessful(200);
// });

//updateCondition--------------------------------
// Feature('PUT')
// Scenario('update medicine', async ({ I }) => {
//     // this way we pass Bearer token
//     I.amBearerAuthenticated(secret('eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJzdXBlcl9hZG1pbiI6ZmFsc2UsInJvbGUiOiJjYXJlX3Byb3ZpZGVyIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hpcGFpLW1vYmlsZS10ZXN0IiwiYXVkIjoiaGlwYWktbW9iaWxlLXRlc3QiLCJhdXRoX3RpbWUiOjE3MTU4MzU1MjEsInVzZXJfaWQiOiJGcUxjT3hwcTRBWm1tbXU4RnVlZnNZYkVnRXoxIiwic3ViIjoiRnFMY094cHE0QVptbW11OEZ1ZWZzWWJFZ0V6MSIsImlhdCI6MTcxNTgzNTUyMSwiZXhwIjoxNzE1ODM5MTIxLCJlbWFpbCI6ImRhYmNAeW9wbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfbnVtYmVyIjoiKzkxNzg3NTQ0NTQ3OCIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFiY0B5b3BtYWlsLmNvbSJdLCJwaG9uZSI6WyIrOTE3ODc1NDQ1NDc4Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GNXiuvxX-T40hQhEg_MbtiJkNApYP0pyX1iqqYFB2hk7F2HbqxkwudAYOv1bWt8vdJ5iiqBfiaWGXJPilcrFBC8xfDi3YBZfbRvdWW83Fl-yq430iX9vx0CMPaCQ_LY8aNlgFJ0pvEbrzqY09MJpbtk-3wBFIt6Ir30dWJCVTbCAIltASxQpY7M8lFL9MGZY8UOjTbGUems0bE5sqAPRfTik1A3Jx_UCUw7CdwLBgEvZYUOg7S6Ul9jGeB1eQ8kQhRrdoIhHVi2a2WTckWnsnkVAXCJHlpdo-uTcxS5lpl_SwfqhiDyAN6C8FRT9wfvCo7lYojvs-YBces935gDu3Q'));
//     // for custom authorization with headers use
//     // I.haveRequestHeaders method

//     // here we send a PUT request
//     const response = await I.sendPutRequest('https://hipai-gateway-3phr2r75nq-uc.a.run.app/hipai/v1/cp-condition?conditionId=1nvhBq17zGdQu3Js1AGd', {
// "cpuid":"m4XMOtCJDiVG4o4betJCQrN2JQH3",
// "name":"cold",
// "timestamp": 168002560,
// "date":"02 jan 2023",
// "appoinmentId":"hj12345",
// "patientId":"1234"
//     })

//     console.log(response.data);
//     // check the last request was successful
//     // this method introduced by JSONResponse helper
//     I.seeResponseCodeIsSuccessful(200);
// });

//removeCondition
// Feature('DELETE') //----------------------------------------------------------------

// Scenario('create user', async ({ I }) => {
//     // this way we pass Bearer token
//   I.amBearerAuthenticated(secret('eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJzdXBlcl9hZG1pbiI6ZmFsc2UsInJvbGUiOiJjYXJlX3Byb3ZpZGVyIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hpcGFpLW1vYmlsZS10ZXN0IiwiYXVkIjoiaGlwYWktbW9iaWxlLXRlc3QiLCJhdXRoX3RpbWUiOjE3MTU4MzU1MjEsInVzZXJfaWQiOiJGcUxjT3hwcTRBWm1tbXU4RnVlZnNZYkVnRXoxIiwic3ViIjoiRnFMY094cHE0QVptbW11OEZ1ZWZzWWJFZ0V6MSIsImlhdCI6MTcxNTgzNTUyMSwiZXhwIjoxNzE1ODM5MTIxLCJlbWFpbCI6ImRhYmNAeW9wbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfbnVtYmVyIjoiKzkxNzg3NTQ0NTQ3OCIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFiY0B5b3BtYWlsLmNvbSJdLCJwaG9uZSI6WyIrOTE3ODc1NDQ1NDc4Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GNXiuvxX-T40hQhEg_MbtiJkNApYP0pyX1iqqYFB2hk7F2HbqxkwudAYOv1bWt8vdJ5iiqBfiaWGXJPilcrFBC8xfDi3YBZfbRvdWW83Fl-yq430iX9vx0CMPaCQ_LY8aNlgFJ0pvEbrzqY09MJpbtk-3wBFIt6Ir30dWJCVTbCAIltASxQpY7M8lFL9MGZY8UOjTbGUems0bE5sqAPRfTik1A3Jx_UCUw7CdwLBgEvZYUOg7S6Ul9jGeB1eQ8kQhRrdoIhHVi2a2WTckWnsnkVAXCJHlpdo-uTcxS5lpl_SwfqhiDyAN6C8FRT9wfvCo7lYojvs-YBces935gDu3Q'));
//   // for custom authorization with headers use
//   // I.haveRequestHeaders method

//   // here we send a GET request
//     const response=await I.sendDeleteRequest('https://hipai-gateway-3phr2r75nq-uc.a.run.app/hipai/v1/cp-condition?conditionId=XWvq2uj5SJK0vYbq97cx');

//     console.log(response.data);
//   // check the last request was successful
//   // this method introduced by JSONResponse helper
//   I.seeResponseCodeIsSuccessful(200);
// })


// Feature('GET') //----------------------------------------------------------------not comming issue

// Scenario('create user', async ({ I }) => {
//     // this way we pass Bearer token
//   I.amBearerAuthenticated(secret('eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJzdXBlcl9hZG1pbiI6ZmFsc2UsInJvbGUiOiJjYXJlX3Byb3ZpZGVyIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hpcGFpLW1vYmlsZS10ZXN0IiwiYXVkIjoiaGlwYWktbW9iaWxlLXRlc3QiLCJhdXRoX3RpbWUiOjE3MTU4MzkwMTcsInVzZXJfaWQiOiJGcUxjT3hwcTRBWm1tbXU4RnVlZnNZYkVnRXoxIiwic3ViIjoiRnFMY094cHE0QVptbW11OEZ1ZWZzWWJFZ0V6MSIsImlhdCI6MTcxNTgzOTAxNywiZXhwIjoxNzE1ODQyNjE3LCJlbWFpbCI6ImRhYmNAeW9wbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfbnVtYmVyIjoiKzkxNzg3NTQ0NTQ3OCIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFiY0B5b3BtYWlsLmNvbSJdLCJwaG9uZSI6WyIrOTE3ODc1NDQ1NDc4Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ZVOJfb-h070CViKWXtH-jCwORxGlU-3ZxdJfZG4UREUIqwotZi1IGjRcSuxOGJZLLSdxxbWXpcDmTnUuMmLQdjkIwqCLWf2YiwJI6AlqVcZ6VomaIYAoG486q6xcQYD190_fkKoUW0FPpPL5ejo7KMUj6Rq1OgBXru5sNR3zerA_BwecNpUVe3QqhWYDDgarLkv66HKuO4gAOhwSrtBhUiL2wLRyoAswKxxNsjejvR9Jy6ak3a725X4G3ZmsXd2v9teupYpPj2mbH2pylU5Q6WwTaa_w45UL0FEgWcnefTJGPRXA1Bx-VwmC2ADNVH0IXbrfvo-nAbRd_lhRS93eHw'));
//   // for custom authorization with headers use
//   // I.haveRequestHeaders method

//   // here we send a GET request
//     const response=await I.sendGetRequest('https://hipai-gateway-3phr2r75nq-uc.a.run.app/hipai/v1/cp-condition?cpuid=T6URPfztiZgsUTUpYZQI4jpqeMD2&patientId=0MDiqYttO6QtQysNJK8W');

//     console.log(response.data);
//   // check the last request was successful
//   // this method introduced by JSONResponse helper
//   I.seeResponseCodeIsSuccessful(200);
// })

//Bulk cancellation --------------------------------------------------------------------------------------------------------------------
Feature('GET')
Scenario('create user', async ({ I }) => {
    // this way we pass Bearer token
  I.amBearerAuthenticated(secret('eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJzdXBlcl9hZG1pbiI6ZmFsc2UsInJvbGUiOiJjYXJlX3Byb3ZpZGVyIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hpcGFpLW1vYmlsZS10ZXN0IiwiYXVkIjoiaGlwYWktbW9iaWxlLXRlc3QiLCJhdXRoX3RpbWUiOjE3MTU4NDEwMTEsInVzZXJfaWQiOiJGcUxjT3hwcTRBWm1tbXU4RnVlZnNZYkVnRXoxIiwic3ViIjoiRnFMY094cHE0QVptbW11OEZ1ZWZzWWJFZ0V6MSIsImlhdCI6MTcxNTg0MTAxMSwiZXhwIjoxNzE1ODQ0NjExLCJlbWFpbCI6ImRhYmNAeW9wbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfbnVtYmVyIjoiKzkxNzg3NTQ0NTQ3OCIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFiY0B5b3BtYWlsLmNvbSJdLCJwaG9uZSI6WyIrOTE3ODc1NDQ1NDc4Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.UuBuWDP3EdFHxY4RohHh5By3BPNKk5q2fWmB_PprpZVi7XTE-RQO9VcyNvm-OqHfmubixmodmxk1_EtYR0JwT4AF7TNnaDSJ2x0rbz-8Jeb2VEKi0hEetoIFQ14qWXxZGcXbfhHtcVXuxnx8Ah0J7jXOFRT12SXjIxM9Grx7ZtA2zOpG_KF_wE8HgtS-CnkirKK_T9NC8tV5rJXCBziniX6dDbCakm05Fots52AYEZUJWPBRunPzIauaTGNEKRdn6ngbn-uEmiyZmT9wLYbwmHb-yG0TX4ZURud92Zjg3vz4HiTogtSKrxjAFLrzyppq0p-IAPI_T7D99Pj0rw92hQ'));
  // for custom authorization with headers use
  // I.haveRequestHeaders method

  // here we send a GET request
    const response=await I.sendGetRequest('https://hipai-gateway-3phr2r75nq-uc.a.run.app/hipai/v1/cp-bulkcancellation/availability');

    console.log(response.data);
  // check the last request was successful
  // this method introduced by JSONResponse helper
  I.seeResponseCodeIsSuccessful(200);
})
