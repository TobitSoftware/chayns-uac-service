export enum ApiRoles
{
    /**
     * Read the groups of a site and the basic infos of a uac group
     */
    Read = "uac.read",

    /**
     * Create/copy uac groups
     */
    Create = "uac.create",

    /**
     * Edit the basic settings of a uac group
     */
    Edit = "uac.edit",

    /**
     * Full access on a uac group (read, create, edit and delete)
     */
    Manage = "uac.manage",

    /**
     * Read group members and the groups of a user
     */
    ReadMembers = "uac.members_read",

    /**
     * Add members to a uac group
     */
    AddMembers = "uac.members_add",

    /**
     * Full access for uac members (read, add and remove)
     */
    ManageMembers = "uac.members_manage",

    /**
     * Read the payment settings of a uac group
     */
    ReadPayment = "uac.payment_read",

    /**
     * Edit the payment settings of a uac group
     */
    EditPayment = "uac.payment_edit",
}
