loginView();
function loginView() {
    appDiv.innerHTML = `
    <div id="login" class="login-container">
        <input id="username" type="text" placeholder="Username">
        <input id="password" type="text" placeholder="Password">
        
        <button id="adminLoginBtn">ADMIN LOGIN</button>
        <button id="userLoginBtn">USER LOGIN</button>
    </div>
    `;
}