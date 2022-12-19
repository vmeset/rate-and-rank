import { createContext, PropsWithChildren, useState } from 'react'
import { IMenuItem } from '../models/IMenu'
import { ETopLevelCategory } from '../models/IPage'

export interface IAppContext {
	menu: IMenuItem[]
	firstCategory: ETopLevelCategory
	setMenu?: (newMenu: IMenuItem[]) => void
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: ETopLevelCategory.Courses })

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
	
    const [menuState, setMenuState] = useState<IMenuItem[]>(menu)
	const setMenu = (newMenu: IMenuItem[]) => {
		setMenuState(newMenu)
	}

	return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
		{children}
	</AppContext.Provider>
}