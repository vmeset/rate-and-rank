import { ReactNode } from "react";

export interface HtagProps {
    children: ReactNode,
    tag: 'h1' | 'h2' | 'h3' | 'h4'
}