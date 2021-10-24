import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components";
import { Button } from "../components";

const NotFoundPage = () => (
    <Layout>
        <h1>
            Oops! Page not found <span role="img" aria-label="investigative face">&#129488;</span>
        </h1>
        <p>
            Looks like this page doesn't exist, sorry about that. Let's get you back to one that does.<br/><br/>  
        </p>
        <Link to="/">
            <Button>
                Back to home
            </Button>
        </Link>
    </Layout>
)

export default NotFoundPage;