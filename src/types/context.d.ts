// types of ThemeProvider

export type Children = {
	children: ReactNode;
};

export type ThemeProps = {
	theme: boolean;
	setTheme: (value: boolean) => void;
};
