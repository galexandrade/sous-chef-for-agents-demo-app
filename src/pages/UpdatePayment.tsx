import { useState } from 'react';
import {
    Button,
    Card,
    CheckboxField,
    Chip,
    IconCheckCircle,
    IconGift,
    Inline,
    Page,
    Stack,
    Text,
} from '@7shifts/sous-chef';

const SELL_POINTS = [
    'Task Management',
    'Permission Templates',
    'Tip Management',
    '7shifts Payroll*',
    'Everything in Pro',
];

const UpdatePayment = () => {
    const [agreed, setAgreed] = useState(false);

    return (
        <Page title="Update your subscription" subtitle="You're upgrading to the Premium plan">
            {/* 504px matches the Figma content column — no Sous Chef component exposes maxWidth */}
            <div style={{ maxWidth: 504, margin: '0 auto' }}>
            <Stack space={16}>
                <Card>
                    <Inline justifyContent="center">
                        <Text as="caption">PLAN ESTIMATIONS DETAILS</Text>
                    </Inline>
                </Card>

                <Card style={{ background: 'var(--semantic/surface/container-high, #f3f3f3)' }}>
                    <Stack space={16}>
                        <Inline justifyContent="space-between" alignItems="center">
                            <Text as="h3">Included in Premium</Text>
                            <Chip theme="upsell"><IconGift /> GREAT VALUE</Chip>
                        </Inline>
                        <Stack space={16}>
                            {SELL_POINTS.map((point) => (
                                <Inline key={point} space={16} alignItems="center">
                                    <IconCheckCircle variant="solid" />
                                    <Text>{point}</Text>
                                </Inline>
                            ))}
                        </Stack>
                    </Stack>
                </Card>

                <Stack space={4}>
                    <CheckboxField
                        name="agree"
                        checked={agreed}
                        onChange={setAgreed}
                        label="I agree to recurring charges from 7shifts"
                        caption="I authorize 7shifts to charge my payment method now and on a recurring basis per my selected plan. I can cancel anytime in my account settings."
                    />
                    <Text as="caption">
                        *Not included: Per employee fees and additional fees for rush payments and late tax filing.
                    </Text>
                </Stack>

                <Inline justifyContent="end" alignItems="center" space={12}>
                    <Button>Back</Button>
                    <Button theme="primary">Confirm and pay</Button>
                </Inline>
            </Stack>
            </div>
        </Page>
    );
};

export default UpdatePayment;
