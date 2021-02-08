import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


    html,body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: #333333;
        font-size: 16px;
        
    }


@keyframes fade
{
  0%   {opacity:1}
  16.666% { opacity: 0}
  33.333% { opacity: 0}
  50% { opacity: 0}
  66.666% { opacity: 0}
  83.333% { opacity: 0 }
  100% { opacity: 1}
}
@keyframes fade2
{
  0%   {opacity:0}
  16.666% { opacity: 1}
  33.333% { opacity: 0}
  50% { opacity: 0}
  66.666% { opacity: 0}
  83.333% { opacity: 0 }
  100% { opacity: 0}
}
@keyframes fade3
{
  0%   {opacity:0}
  16.666% { opacity: 0}
  33.333% { opacity: 1}
  50% { opacity: 0}
  66.666% { opacity: 0}
  83.333% { opacity: 0 }
  100% { opacity: 0}
}

@keyframes fade4
{
  0%   {opacity:0}
  16.666% { opacity: 0}
  33.333% { opacity: 0}
  50% { opacity: 1}
  66.666% { opacity: 0}
  83.333% { opacity: 0 }
  100% { opacity: 0}
}

@keyframes fade5
{
  0%   {opacity:0}
  16.666% { opacity: 0}
  33.333% { opacity: 0}
  50% { opacity: 0}
  66.666% { opacity: 1}
  83.333% { opacity: 0 }
  100% { opacity: 0}
}

@keyframes fade6
{
  0%   {opacity:0}
  16.666% { opacity: 0}
  33.333% { opacity: 0}
  50% { opacity: 0}
  66.666% { opacity: 0}
  83.333% { opacity: 1 }
  100% { opacity: 0}
}
`;
