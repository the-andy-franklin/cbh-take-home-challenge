# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket 1: Add Agent relationship field to the Facility table
### Description:
Modify the Facility table in the database to include a new field that stores a JSON object. This JSON object will contain key-value pairs, where the keys are the custom facility-unique IDs and the values are the Agent UUIDs.

### Acceptance Criteria:

A new field named 'agent_relationships' is added to the Facility table.
The 'agent_relationships' field should be of JSON data type to store the key-value pairs.
The database schema is updated with the new field.
Time/Effort Estimate:
2-4 hours

### Implementation Details:

Update the database schema by adding the 'agent_relationships' field to the Facility table.
Perform a migration to apply the schema changes to the database.

## Ticket 2: Create functionality for Facilities to save custom facility-unique IDs for Agent relationships
### Description:
Develop a feature that allows Facilities to save custom facility-unique IDs for each Agent they have a relationship with.

### Acceptance Criteria:

Facilities can add or update custom facility-unique IDs for Agent relationships through the platform's user interface.
The custom facility-unique IDs are saved in the 'agent_relationships' field in the Facility table in the database.
Time/Effort Estimate:
8-12 hours

### Implementation Details:

Add a new input field for the custom facility-unique ID in the user interface where Facilities manage their Agent relationships.
Update the backend to handle the custom facility-unique ID input and save it to the 'agent_relationships' field in the Facility table when a Facility adds or updates an Agent relationship.
Implement validation for the custom facility-unique ID input to ensure it meets any requirements (e.g., UUID format).

## Ticket 3: Modify the getShiftsByFacility function to include custom facility-unique IDs for Agent relationships
### Description:
Update the getShiftsByFacility function to extract the custom facility-unique IDs for Agent relationships from the 'agent_relationships' JSON field in the returned Shift data.

### Acceptance Criteria:

The getShiftsByFacility function returns Shift data that includes the custom facility-unique ID for each Agent relationship.
Time/Effort Estimate:
4-6 hours

### Implementation Details:

Modify the SQL query in the getShiftsByFacility function to include the 'agent_relationships' JSON field from the Facility table.
Update the function to extract and return the custom facility-unique IDs for Agent relationships as part of the Shift data.

## Ticket 4: Update the generateReport function to use custom facility-unique IDs for Agent relationships
### Description:
Modify the generateReport function to use custom facility-unique IDs for Agent relationships in the generated PDF report.

### Acceptance Criteria:

The generateReport function uses the custom facility-unique ID for each Agent relationship in the generated report.
Time/Effort Estimate:
4-6 hours

### Implementation Details:

Update the generateReport function to check for the presence of a custom facility-unique ID for each Agent relationship in the Shift data.
Modify the function to use the custom facility-unique ID in the report when available.
