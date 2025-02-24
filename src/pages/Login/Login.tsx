import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import SvgCoffee from '../../components/SVGs/SvgCoffee';
import './Login.styles.scss';
import SvgEmail from '../../components/SVGs/SvgEmail';
import AuthService from '../../services/AuthService';
import Spinner from '../../components/Spinner/Spinner';
import { Controller, useForm } from 'react-hook-form';
import { IBody, SchemaLogin } from './Login.types';
import { yupResolver } from '@hookform/resolvers/yup';


const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>("")

    const { setUser, login, setAdmin } = useAuth()
    const navigate = useNavigate()

    const adminIds = ["d19bd961-28c3-4b4d-b508-825fc005e302"];


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaLogin),
    defaultValues: {
      email: ""
    }
  });

  const handleLogin = async (body: IBody) => {
    setIsLoading(true)
    PostLogin(body.email)
  };

  const PostLogin = (email: string) => {
    AuthService.PostLogin(email).then(
        data => {
          console.log("ok", data);
          login(data.token)
          setUser(data.user)
          if (adminIds.includes(data.user.id)) {
            setAdmin(true);
          } else {
            setAdmin(false);
          }
          setIsLoading(false);
          navigate("/home")
        },
        error => {
          setMessageError(error.response.data.message)
          setIsLoading(false);
        },
      );
  };

  return (
    <div className='Login'>

        <div className='container-center'>
            <SvgCoffee />
            <h1 className='title'>the news</h1>
            <h2 className='subtitle'>acompanhe seu engajamento</h2>

            <form className='container-email' onSubmit={handleSubmit(handleLogin)}>
                <div className='container-input'>
                    <SvgEmail />

                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (   
                             <input
                            type="email"
                            placeholder="e-mail"
                            className='input-email'
                            value={value}
                            onChange={onChange}
                            />
                        )}
                    />

                </div>

                {!isLoading ? <button 
                disabled={isLoading ? true : false} 
                className='button' 
                type="submit">acessar
                </button> :  <div style={{marginRight: 6}}><Spinner /></div>}
                
                
            </form>
            {errors.email && (
            <p className='label-error'>{errors.email?.message}</p>
            )}
            <p className='label-error'>{messageError}</p>
        </div>

       



      {/*<h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Entrar</button>
  </form>*/}
    </div>
  );
};

export default Login;
