declare module "TeX-to-MML" {

    /* interface options {
        width?: number,
        ex?: number,
        em?: number,
        fontURL?: string
    } */

    export default function TeXToMML(str: string): string;
}