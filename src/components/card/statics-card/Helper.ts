import { useEffect, useState } from "react"
export const useStaticCardHook = (apiDetails: StaticCardProps["apiDetails"]) => {
    const [cardDetails, setCardDetails] = useState<CardDetailsProps>()

    useEffect(() => {
        apiDetails?.api().then((response) => {
            console.log(response)
            if (response) {
                setCardDetails(response)
            }
        }).catch((err: unknown) => console.log(err))
    }, [apiDetails])

    return {
        cardDetails
    }
}

export declare type CardDetailsProps = {
    title: string
    total: string
    currentStatus: {
        growthStatus?: boolean
        percentage: number
    }
}

export interface StaticCardProps {
    icon: string
    color: string
    apiDetails: {
        key: string,
        api: () => Promise<CardDetailsProps>;
    }
}
