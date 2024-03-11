import React from 'react';

function LogoutButton() {
    const handleLogout = () => {
        localStorage.setItem("token", "")
        localStorage.setItem("user_id", "")
        localStorage.setItem("isAuthenticated", "false")
    };

    return (
            <form className="form_margin" onSubmit={handleLogout}>
                <div id="return-index-container" className="select-container margin">
                    <input type="submit" value="Log out" id="logout-button"/>
                </div>
            </form>
    );
}

export default LogoutButton;
