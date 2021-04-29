import React from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";

import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from "./ServicesElements";

const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Reduce expenses</ServicesH2>
					<ServicesP>We help reduce fees and increase your revenue </ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>More time</ServicesH2>
					<ServicesP>You can access your app anywhere from the world</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Best Benefits</ServicesH2>
					<ServicesP> Unlock cashback for 5% ! </ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
