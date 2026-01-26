export interface NavItem {
    readonly label: string;
    readonly href: string;
    //   readonly heroTitle: string; // heroTitle도 쓰신다고 했으니 추가
    readonly heroBg: string;
    readonly items?: readonly { // items는 있을 수도 있고 없을 수도 있음 (?)
        readonly label: string;
        readonly href: string;
        readonly heroBg: string;
        // readonly heroTitle: string;
    }[];
}

export interface SubtabItem {
    readonly label: string;
    readonly id: string;
}