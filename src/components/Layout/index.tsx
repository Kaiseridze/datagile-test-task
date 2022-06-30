import { FC } from "react";
import { ILayout } from "../../models";

import './Layout.css'

const Layout: FC<ILayout> = ({ children }) => {
	return <div className="layout">{children}</div>;
}

export default Layout;
