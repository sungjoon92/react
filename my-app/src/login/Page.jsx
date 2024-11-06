function AdminPage() {
  return (
    <>
      <div>AdminPage</div>
    </>
  );
}

function ManagerPage() {
  return (
    <>
      <div>ManagerPage</div>
    </>
  );
}
function UserPage() {
  return (
    <>
      <div>Userpage</div>
    </>
  );
}

// function Page({}) {
//   const userType = false;
//   let result;
//   if (userType) {
//     result = <AdminPage></AdminPage>;
//   } else {
//     result = <UserPage></UserPage>;
//   }
//   return (
//     <>
//       <h1>나의 앱</h1>
//       <div> {result}</div>
//     </>
//   );

function Page({ userType }) {
  // let userType = "";
  let userDefault = <div style={{ color: "red" }}>회원가입해주세요</div>;
  let result;
  if (userType === "admin") {
    result = <AdminPage></AdminPage>;
  } else if (userType === "manager") {
    result = <ManagerPage></ManagerPage>;
  } else if (userType === "user") {
    result = <UserPage></UserPage>;
  } else {
    result = userDefault;
  }
  return (
    <>
      <h1>나의 앱</h1>
      <div> {result}</div>
    </>
  );
}

export default Page;
