import Link from "next/link";

type ItemMenuDropdownMobile = {
    href: string;
    text: string;
}

type MenuDropdownProps = {
    items: ItemMenuDropdownMobile[];
}

export function MenuDropdownMobile({ items }: MenuDropdownProps) {
    const lenItems = items.length-1;

    return (
        <>
            {
                items.map((item, index)=>{
                    if(lenItems !== index){
                        return (
                            <>
                                <div key={index+2} className="mx-1">
                                    <a href={item.href} >{item.text}</a>
                                </div>
                                <div key={index+1} className="is-hidden-mobile mx-2 divider-vertical"></div>
                            </>
                        )
                    }else{
                        return (
                            <div key={index+3} className="mx-1">
                                <a href={item.href} >{item.text}</a>
                            </div>
                        );
                    }
                })
            }
        </>
    );
}