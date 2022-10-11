type DividerProps = {
    isVertical?: boolean;
};

/**
 * 
 * @param isVertical if divider will be vertical or no 
 */


export function Divider({ isVertical }: DividerProps) {

    const styles = isVertical?{
        borderLeft: '1px solid hsl(0, 0%, 71%)'
    }:{
        borderTop: '1px solid hsl(0, 0%, 71%)'
    };

    return (<div style={styles}></div>);
}