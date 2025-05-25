import React from 'react';

const Sidebar = () => {
    const accountPaymentData ={
        invoiceAccountId: "4",
        invoiceAddress: "Dhaka",
        requestedBy: "Rafiul Islam",
        poNumber: "1566546",
    };

    const descriptionData =[
        {
            id: 4081,
            product: 3,
            sku_code: "SKU-45F51199",
            description: "Cool",
            unit_price: "31.00",
            qty: 13,
            discount: "30.00",
            total: "373.00",
            product_name: "Antic Product",
            quantity: "5",
        },
        {
            id: 4077,
            product: 1,
            sku_code: "SKU-99FD45F9",
            description: "A Valid Configuration",
            unit_price: "32.00",
            qty: 22,
            discount: "30.00",
            total: "674.00",
            product_name: "Thermostat Systems",
            quantity: "5",
        },
    ];

    const vehicleInfoDat={
        selectedMake: "1",
        selectedModel: "3",
        selectedType: "1",
        registration: "45223",
    };

    const optionsData={
        selectedService: "4",
        existingKit: "yes",
        availableDates: "2025-01-28",
        wrapJobs: true,
        wrapper: "151645",
    };

    const tabData ={
        customerDetails: {
            id: 4,
            customer_ref_number: "56564",
            paymentReference: "456789",
            contact_name: "Sabbir Rahman",
            phone_numbers: "01125793356",
            email_address: "sabbir@gmail.com",
            companyId: 2, 
            company_name: "Adolph Coors Company",
            purchasingNotes: "Remove the plastic first",
            engineerNotes: "Make it perfectly",
            customer_address: {
                address_line_1: "Dhaka",
                address_line_2: "Mirpur 2",
                address_line_3: "Barekmolla",
                address_line_4: "162 street",
                postcode: "4565",
            },
            
        },
        delivery_details: {
            addressLine1: "Dhaka",
            addressLine2: "Mirpur 10",
            city: "Barekmolla",
            state: "162 street",
            postcode: "4582",
        },
    };
    return (
        <div>
            <h1>Sidebar</h1>
        </div>
    );
};

export default Sidebar;