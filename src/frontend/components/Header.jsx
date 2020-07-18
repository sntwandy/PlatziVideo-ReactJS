import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import PropTypes from 'prop-types';

// Styles
import '../assets/styles/components/Header.scss';

// Assets
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
    const { user } = props;

    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        document.cookie = "email=";
        document.cookie = "name=";
        document.cookie = "id=";
        document.cookie = "token=";
        props.logoutRequest({});
        window.location.href = '/login';
    };

    return(
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                {
                    hasUser ?
                    <img src={gravatar(user.email)} alt={user.email}/> :
                    <img src={userIcon} alt="User icon" />
                }
                        <p>Perfil</p>
                </div>
                <ul>
                    {
                        hasUser ?
                            <li>
                                <Link to='/'>{user.name}</Link>
                            </li>
                            :
                            null
                    }

                    {
                        hasUser ?
                        <li>
                            <Link to='/' onClick={handleLogout}>Cerrar Sesión</Link>
                        </li>
                        :
                        <li>
                            <Link to="/login">Iniciar Sesión</Link>
                        </li>
                    }
                </ul>
            </div>
        </header>
    );
};

Header.propType = {
    user: PropTypes.object,
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = {
    logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);