import * as React from "react";
import { SelectArrayInput, List, SingleFieldList, ChipField, Datagrid, ArrayField, Edit, Create, Show, SimpleShowLayout, DateField, TextField, SimpleForm, EditButton, TextInput, DateInput } from 'react-admin';
import RestaurantRoundedIcon from '@material-ui/icons/RestaurantRounded';
export const RestaurantIcon = RestaurantRoundedIcon;

export const RestaurantList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="description" />
            <EditButton basePath="/restaurants" />
        </Datagrid>
    </List>
);

const RestaurantTitle = ({ record }) => {
    return <span>Restaurant {record ? `"${record.title}"` : ''}</span>;
};

export const RestaurantEdit = (props) => (
    <Edit title={<RestaurantTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="address" />
            <TextInput source="cover" />
            <TextInput source="description" />
            <DateInput source="lastupdate" />
            <TextInput source="latitude" />
            <TextInput source="longitude" />
            <TextInput source="phoneNumber" />
            <SelectArrayInput label="Sauces" source="sauces" choices={[
                { id: 'blanche', name: 'Blanche' },
                { id: 'samourai', name: 'Samouraï' },
                { id: 'algerienne', name: 'Algérienne' },
                { id: 'blanche-harissa', name: 'Blanche-Harissa' },
                { id: 'ketchup', name: 'Ketchup' },
                { id: 'mayonnaise', name: 'Mayonnaise' },
                { id: 'ketchup-mayo', name: 'Ketchup-mayo' },
                { id: 'andalouse', name: 'Andalouse' },
                { id: 'poivre', name: 'Poivre' },
                { id: 'bearnaise', name: 'Béarnaise' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const RestaurantCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="address" />
            <TextInput source="cover" />
            <TextInput source="description" />
            <DateInput source="lastupdate" />
            <TextInput source="latitude" />
            <TextInput source="longitude" />
            <TextInput source="phoneNumber" />
            <SelectArrayInput label="Sauces" source="sauces" choices={[
                { id: 'blanche', name: 'Blanche' },
                { id: 'samourai', name: 'Samouraï' },
                { id: 'algerienne', name: 'Algérienne' },
                { id: 'blanche-harissa', name: 'Blanche-Harissa' },
                { id: 'ketchup', name: 'Ketchup' },
                { id: 'mayonnaise', name: 'Mayonnaise' },
                { id: 'ketchup-mayo', name: 'Ketchup-mayo' },
                { id: 'andalouse', name: 'Andalouse' },
                { id: 'poivre', name: 'Poivre' },
                { id: 'bearnaise', name: 'Béarnaise' },
            ]} />
        </SimpleForm>
    </Create>
);


export const RestaurantShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField disabled source="id" />
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="cover" />
            <TextField source="description" />
            <DateField source="lastupdate" />
            <TextField source="latitude" />
            <TextField source="longitude" />
            <TextField source="phoneNumber" />
            <ArrayField source="sauces">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);