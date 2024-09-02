/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AddUserToGroupResponse = (function() {

    /**
     * Properties of an AddUserToGroupResponse.
     * @exports IAddUserToGroupResponse
     * @interface IAddUserToGroupResponse
     * @property {boolean|null} [isPending] AddUserToGroupResponse isPending
     */

    /**
     * Constructs a new AddUserToGroupResponse.
     * @exports AddUserToGroupResponse
     * @classdesc Represents an AddUserToGroupResponse.
     * @implements IAddUserToGroupResponse
     * @constructor
     * @param {IAddUserToGroupResponse=} [p] Properties to set
     */
    function AddUserToGroupResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AddUserToGroupResponse isPending.
     * @member {boolean} isPending
     * @memberof AddUserToGroupResponse
     * @instance
     */
    AddUserToGroupResponse.prototype.isPending = false;

    /**
     * Creates a new AddUserToGroupResponse instance using the specified properties.
     * @function create
     * @memberof AddUserToGroupResponse
     * @static
     * @param {IAddUserToGroupResponse=} [properties] Properties to set
     * @returns {AddUserToGroupResponse} AddUserToGroupResponse instance
     */
    AddUserToGroupResponse.create = function create(properties) {
        return new AddUserToGroupResponse(properties);
    };

    /**
     * Encodes the specified AddUserToGroupResponse message. Does not implicitly {@link AddUserToGroupResponse.verify|verify} messages.
     * @function encode
     * @memberof AddUserToGroupResponse
     * @static
     * @param {IAddUserToGroupResponse} m AddUserToGroupResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddUserToGroupResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.isPending != null && Object.hasOwnProperty.call(m, "isPending"))
            w.uint32(8).bool(m.isPending);
        return w;
    };

    /**
     * Decodes an AddUserToGroupResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AddUserToGroupResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AddUserToGroupResponse} AddUserToGroupResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddUserToGroupResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AddUserToGroupResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.isPending = r.bool();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for AddUserToGroupResponse
     * @function getTypeUrl
     * @memberof AddUserToGroupResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AddUserToGroupResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AddUserToGroupResponse";
    };

    return AddUserToGroupResponse;
})();

$root.Decimal = (function() {

    /**
     * Properties of a Decimal.
     * @exports IDecimal
     * @interface IDecimal
     * @property {number|Long|null} [lo] Decimal lo
     * @property {number|null} [hi] Decimal hi
     * @property {number|null} [signScale] Decimal signScale
     */

    /**
     * Constructs a new Decimal.
     * @exports Decimal
     * @classdesc Represents a Decimal.
     * @implements IDecimal
     * @constructor
     * @param {IDecimal=} [p] Properties to set
     */
    function Decimal(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Decimal lo.
     * @member {number|Long} lo
     * @memberof Decimal
     * @instance
     */
    Decimal.prototype.lo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Decimal hi.
     * @member {number} hi
     * @memberof Decimal
     * @instance
     */
    Decimal.prototype.hi = 0;

    /**
     * Decimal signScale.
     * @member {number} signScale
     * @memberof Decimal
     * @instance
     */
    Decimal.prototype.signScale = 0;

    /**
     * Creates a new Decimal instance using the specified properties.
     * @function create
     * @memberof Decimal
     * @static
     * @param {IDecimal=} [properties] Properties to set
     * @returns {Decimal} Decimal instance
     */
    Decimal.create = function create(properties) {
        return new Decimal(properties);
    };

    /**
     * Encodes the specified Decimal message. Does not implicitly {@link Decimal.verify|verify} messages.
     * @function encode
     * @memberof Decimal
     * @static
     * @param {IDecimal} m Decimal message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Decimal.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.lo != null && Object.hasOwnProperty.call(m, "lo"))
            w.uint32(8).uint64(m.lo);
        if (m.hi != null && Object.hasOwnProperty.call(m, "hi"))
            w.uint32(16).uint32(m.hi);
        if (m.signScale != null && Object.hasOwnProperty.call(m, "signScale"))
            w.uint32(24).sint32(m.signScale);
        return w;
    };

    /**
     * Decodes a Decimal message from the specified reader or buffer.
     * @function decode
     * @memberof Decimal
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Decimal} Decimal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Decimal.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Decimal();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.lo = r.uint64();
                    break;
                }
            case 2: {
                    m.hi = r.uint32();
                    break;
                }
            case 3: {
                    m.signScale = r.sint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for Decimal
     * @function getTypeUrl
     * @memberof Decimal
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Decimal.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Decimal";
    };

    return Decimal;
})();

$root.GroupInvitation = (function() {

    /**
     * Properties of a GroupInvitation.
     * @exports IGroupInvitation
     * @interface IGroupInvitation
     * @property {number|null} [id] GroupInvitation id
     * @property {number|null} [userGroupId] GroupInvitation userGroupId
     * @property {string|null} [siteId] GroupInvitation siteId
     * @property {string|null} [personId] GroupInvitation personId
     * @property {InvitationStatus|null} [status] GroupInvitation status
     * @property {string|null} [groupName] GroupInvitation groupName
     * @property {IDecimal|null} [admissionFee] GroupInvitation admissionFee
     * @property {IDecimal|null} [subscriptionPrice] GroupInvitation subscriptionPrice
     * @property {SubscriptionIntervalType|null} [subscriptionInterval] GroupInvitation subscriptionInterval
     * @property {string|null} [createdBy] GroupInvitation createdBy
     * @property {string|null} [firstname] GroupInvitation firstname
     * @property {string|null} [lastname] GroupInvitation lastname
     */

    /**
     * Constructs a new GroupInvitation.
     * @exports GroupInvitation
     * @classdesc Represents a GroupInvitation.
     * @implements IGroupInvitation
     * @constructor
     * @param {IGroupInvitation=} [p] Properties to set
     */
    function GroupInvitation(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GroupInvitation id.
     * @member {number} id
     * @memberof GroupInvitation
     * @instance
     */
    GroupInvitation.prototype.id = 0;

    /**
     * GroupInvitation userGroupId.
     * @member {number} userGroupId
     * @memberof GroupInvitation
     * @instance
     */
    GroupInvitation.prototype.userGroupId = 0;

    /**
     * GroupInvitation siteId.
     * @member {string} siteId
     * @memberof GroupInvitation
     * @instance
     */
    GroupInvitation.prototype.siteId = "";

    /**
     * GroupInvitation personId.
     * @member {string} personId
     * @memberof GroupInvitation
     * @instance
     */
    GroupInvitation.prototype.personId = "";

    /**
     * GroupInvitation status.
     * @member {InvitationStatus} status
     * @memberof GroupInvitation
     * @instance
     */
    GroupInvitation.prototype.status = 0;

    /**
     * GroupInvitation groupName.
     * @member {string} groupName
     * @memberof GroupInvitation
     * @instance
     */
    GroupInvitation.prototype.groupName = "";

    /**
     * GroupInvitation admissionFee.
     * @member {IDecimal|null|undefined} admissionFee
     * @memberof GroupInvitation
     * @instance
     */
    GroupInvitation.prototype.admissionFee = null;

    /**
     * GroupInvitation subscriptionPrice.
     * @member {IDecimal|null|undefined} subscriptionPrice
     * @memberof GroupInvitation
     * @instance
     */
    GroupInvitation.prototype.subscriptionPrice = null;

    /**
     * GroupInvitation subscriptionInterval.
     * @member {SubscriptionIntervalType} subscriptionInterval
     * @memberof GroupInvitation
     * @instance
     */
    GroupInvitation.prototype.subscriptionInterval = 0;

    /**
     * GroupInvitation createdBy.
     * @member {string} createdBy
     * @memberof GroupInvitation
     * @instance
     */
    GroupInvitation.prototype.createdBy = "";

    /**
     * GroupInvitation firstname.
     * @member {string} firstname
     * @memberof GroupInvitation
     * @instance
     */
    GroupInvitation.prototype.firstname = "";

    /**
     * GroupInvitation lastname.
     * @member {string} lastname
     * @memberof GroupInvitation
     * @instance
     */
    GroupInvitation.prototype.lastname = "";

    /**
     * Creates a new GroupInvitation instance using the specified properties.
     * @function create
     * @memberof GroupInvitation
     * @static
     * @param {IGroupInvitation=} [properties] Properties to set
     * @returns {GroupInvitation} GroupInvitation instance
     */
    GroupInvitation.create = function create(properties) {
        return new GroupInvitation(properties);
    };

    /**
     * Encodes the specified GroupInvitation message. Does not implicitly {@link GroupInvitation.verify|verify} messages.
     * @function encode
     * @memberof GroupInvitation
     * @static
     * @param {IGroupInvitation} m GroupInvitation message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GroupInvitation.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.userGroupId != null && Object.hasOwnProperty.call(m, "userGroupId"))
            w.uint32(16).int32(m.userGroupId);
        if (m.siteId != null && Object.hasOwnProperty.call(m, "siteId"))
            w.uint32(26).string(m.siteId);
        if (m.personId != null && Object.hasOwnProperty.call(m, "personId"))
            w.uint32(34).string(m.personId);
        if (m.status != null && Object.hasOwnProperty.call(m, "status"))
            w.uint32(40).int32(m.status);
        if (m.groupName != null && Object.hasOwnProperty.call(m, "groupName"))
            w.uint32(50).string(m.groupName);
        if (m.admissionFee != null && Object.hasOwnProperty.call(m, "admissionFee"))
            $root.Decimal.encode(m.admissionFee, w.uint32(58).fork()).ldelim();
        if (m.subscriptionPrice != null && Object.hasOwnProperty.call(m, "subscriptionPrice"))
            $root.Decimal.encode(m.subscriptionPrice, w.uint32(66).fork()).ldelim();
        if (m.subscriptionInterval != null && Object.hasOwnProperty.call(m, "subscriptionInterval"))
            w.uint32(72).int32(m.subscriptionInterval);
        if (m.createdBy != null && Object.hasOwnProperty.call(m, "createdBy"))
            w.uint32(82).string(m.createdBy);
        if (m.firstname != null && Object.hasOwnProperty.call(m, "firstname"))
            w.uint32(90).string(m.firstname);
        if (m.lastname != null && Object.hasOwnProperty.call(m, "lastname"))
            w.uint32(98).string(m.lastname);
        return w;
    };

    /**
     * Decodes a GroupInvitation message from the specified reader or buffer.
     * @function decode
     * @memberof GroupInvitation
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GroupInvitation} GroupInvitation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GroupInvitation.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GroupInvitation();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.userGroupId = r.int32();
                    break;
                }
            case 3: {
                    m.siteId = r.string();
                    break;
                }
            case 4: {
                    m.personId = r.string();
                    break;
                }
            case 5: {
                    m.status = r.int32();
                    break;
                }
            case 6: {
                    m.groupName = r.string();
                    break;
                }
            case 7: {
                    m.admissionFee = $root.Decimal.decode(r, r.uint32());
                    break;
                }
            case 8: {
                    m.subscriptionPrice = $root.Decimal.decode(r, r.uint32());
                    break;
                }
            case 9: {
                    m.subscriptionInterval = r.int32();
                    break;
                }
            case 10: {
                    m.createdBy = r.string();
                    break;
                }
            case 11: {
                    m.firstname = r.string();
                    break;
                }
            case 12: {
                    m.lastname = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for GroupInvitation
     * @function getTypeUrl
     * @memberof GroupInvitation
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GroupInvitation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GroupInvitation";
    };

    return GroupInvitation;
})();

$root.GroupInvitations = (function() {

    /**
     * Properties of a GroupInvitations.
     * @exports IGroupInvitations
     * @interface IGroupInvitations
     * @property {Array.<IGroupInvitation>|null} [groupInvitations] GroupInvitations groupInvitations
     */

    /**
     * Constructs a new GroupInvitations.
     * @exports GroupInvitations
     * @classdesc Represents a GroupInvitations.
     * @implements IGroupInvitations
     * @constructor
     * @param {IGroupInvitations=} [p] Properties to set
     */
    function GroupInvitations(p) {
        this.groupInvitations = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GroupInvitations groupInvitations.
     * @member {Array.<IGroupInvitation>} groupInvitations
     * @memberof GroupInvitations
     * @instance
     */
    GroupInvitations.prototype.groupInvitations = $util.emptyArray;

    /**
     * Creates a new GroupInvitations instance using the specified properties.
     * @function create
     * @memberof GroupInvitations
     * @static
     * @param {IGroupInvitations=} [properties] Properties to set
     * @returns {GroupInvitations} GroupInvitations instance
     */
    GroupInvitations.create = function create(properties) {
        return new GroupInvitations(properties);
    };

    /**
     * Encodes the specified GroupInvitations message. Does not implicitly {@link GroupInvitations.verify|verify} messages.
     * @function encode
     * @memberof GroupInvitations
     * @static
     * @param {IGroupInvitations} m GroupInvitations message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GroupInvitations.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.groupInvitations != null && m.groupInvitations.length) {
            for (var i = 0; i < m.groupInvitations.length; ++i)
                $root.GroupInvitation.encode(m.groupInvitations[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a GroupInvitations message from the specified reader or buffer.
     * @function decode
     * @memberof GroupInvitations
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GroupInvitations} GroupInvitations
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GroupInvitations.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GroupInvitations();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.groupInvitations && m.groupInvitations.length))
                        m.groupInvitations = [];
                    m.groupInvitations.push($root.GroupInvitation.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for GroupInvitations
     * @function getTypeUrl
     * @memberof GroupInvitations
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GroupInvitations.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GroupInvitations";
    };

    return GroupInvitations;
})();

/**
 * InvitationStatus enum.
 * @exports InvitationStatus
 * @enum {number}
 * @property {number} Pending=0 Pending value
 * @property {number} Accepted=1 Accepted value
 * @property {number} Declined=2 Declined value
 * @property {number} Revoked=3 Revoked value
 */
$root.InvitationStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Pending"] = 0;
    values[valuesById[1] = "Accepted"] = 1;
    values[valuesById[2] = "Declined"] = 2;
    values[valuesById[3] = "Revoked"] = 3;
    return values;
})();

/**
 * SubscriptionIntervalType enum.
 * @exports SubscriptionIntervalType
 * @enum {number}
 * @property {number} ZERO=0 ZERO value
 * @property {number} Daily=1 Daily value
 * @property {number} Weekly=7 Weekly value
 * @property {number} Monthly=30 Monthly value
 * @property {number} Yearly=365 Yearly value
 */
$root.SubscriptionIntervalType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ZERO"] = 0;
    values[valuesById[1] = "Daily"] = 1;
    values[valuesById[7] = "Weekly"] = 7;
    values[valuesById[30] = "Monthly"] = 30;
    values[valuesById[365] = "Yearly"] = 365;
    return values;
})();

$root.GroupMember = (function() {

    /**
     * Properties of a GroupMember.
     * @exports IGroupMember
     * @interface IGroupMember
     * @property {string|null} [personId] GroupMember personId
     * @property {ITimestamp|null} [creationTime] GroupMember creationTime
     * @property {ITimestamp|null} [expirationTime] GroupMember expirationTime
     * @property {string|null} [firstname] GroupMember firstname
     * @property {string|null} [lastname] GroupMember lastname
     * @property {number|null} [userGroupId] GroupMember userGroupId
     * @property {IPerson|null} [creationUser] GroupMember creationUser
     * @property {string|null} [siteId] GroupMember siteId
     * @property {number|Long|null} [subscriptionId] GroupMember subscriptionId
     * @property {string|null} [membercardUid] GroupMember membercardUid
     */

    /**
     * Constructs a new GroupMember.
     * @exports GroupMember
     * @classdesc Represents a GroupMember.
     * @implements IGroupMember
     * @constructor
     * @param {IGroupMember=} [p] Properties to set
     */
    function GroupMember(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GroupMember personId.
     * @member {string} personId
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.personId = "";

    /**
     * GroupMember creationTime.
     * @member {ITimestamp|null|undefined} creationTime
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.creationTime = null;

    /**
     * GroupMember expirationTime.
     * @member {ITimestamp|null|undefined} expirationTime
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.expirationTime = null;

    /**
     * GroupMember firstname.
     * @member {string} firstname
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.firstname = "";

    /**
     * GroupMember lastname.
     * @member {string} lastname
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.lastname = "";

    /**
     * GroupMember userGroupId.
     * @member {number} userGroupId
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.userGroupId = 0;

    /**
     * GroupMember creationUser.
     * @member {IPerson|null|undefined} creationUser
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.creationUser = null;

    /**
     * GroupMember siteId.
     * @member {string} siteId
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.siteId = "";

    /**
     * GroupMember subscriptionId.
     * @member {number|Long} subscriptionId
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.subscriptionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GroupMember membercardUid.
     * @member {string} membercardUid
     * @memberof GroupMember
     * @instance
     */
    GroupMember.prototype.membercardUid = "";

    /**
     * Creates a new GroupMember instance using the specified properties.
     * @function create
     * @memberof GroupMember
     * @static
     * @param {IGroupMember=} [properties] Properties to set
     * @returns {GroupMember} GroupMember instance
     */
    GroupMember.create = function create(properties) {
        return new GroupMember(properties);
    };

    /**
     * Encodes the specified GroupMember message. Does not implicitly {@link GroupMember.verify|verify} messages.
     * @function encode
     * @memberof GroupMember
     * @static
     * @param {IGroupMember} m GroupMember message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GroupMember.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.personId != null && Object.hasOwnProperty.call(m, "personId"))
            w.uint32(10).string(m.personId);
        if (m.creationTime != null && Object.hasOwnProperty.call(m, "creationTime"))
            $root.Timestamp.encode(m.creationTime, w.uint32(18).fork()).ldelim();
        if (m.expirationTime != null && Object.hasOwnProperty.call(m, "expirationTime"))
            $root.Timestamp.encode(m.expirationTime, w.uint32(26).fork()).ldelim();
        if (m.firstname != null && Object.hasOwnProperty.call(m, "firstname"))
            w.uint32(34).string(m.firstname);
        if (m.lastname != null && Object.hasOwnProperty.call(m, "lastname"))
            w.uint32(42).string(m.lastname);
        if (m.userGroupId != null && Object.hasOwnProperty.call(m, "userGroupId"))
            w.uint32(48).int32(m.userGroupId);
        if (m.creationUser != null && Object.hasOwnProperty.call(m, "creationUser"))
            $root.Person.encode(m.creationUser, w.uint32(58).fork()).ldelim();
        if (m.siteId != null && Object.hasOwnProperty.call(m, "siteId"))
            w.uint32(8002).string(m.siteId);
        if (m.subscriptionId != null && Object.hasOwnProperty.call(m, "subscriptionId"))
            w.uint32(8008).int64(m.subscriptionId);
        if (m.membercardUid != null && Object.hasOwnProperty.call(m, "membercardUid"))
            w.uint32(8018).string(m.membercardUid);
        return w;
    };

    /**
     * Decodes a GroupMember message from the specified reader or buffer.
     * @function decode
     * @memberof GroupMember
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GroupMember} GroupMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GroupMember.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GroupMember();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.personId = r.string();
                    break;
                }
            case 2: {
                    m.creationTime = $root.Timestamp.decode(r, r.uint32());
                    break;
                }
            case 3: {
                    m.expirationTime = $root.Timestamp.decode(r, r.uint32());
                    break;
                }
            case 4: {
                    m.firstname = r.string();
                    break;
                }
            case 5: {
                    m.lastname = r.string();
                    break;
                }
            case 6: {
                    m.userGroupId = r.int32();
                    break;
                }
            case 7: {
                    m.creationUser = $root.Person.decode(r, r.uint32());
                    break;
                }
            case 1000: {
                    m.siteId = r.string();
                    break;
                }
            case 1001: {
                    m.subscriptionId = r.int64();
                    break;
                }
            case 1002: {
                    m.membercardUid = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for GroupMember
     * @function getTypeUrl
     * @memberof GroupMember
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GroupMember.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GroupMember";
    };

    return GroupMember;
})();

$root.GroupMembers = (function() {

    /**
     * Properties of a GroupMembers.
     * @exports IGroupMembers
     * @interface IGroupMembers
     * @property {Array.<IGroupMember>|null} [groupMembers] GroupMembers groupMembers
     */

    /**
     * Constructs a new GroupMembers.
     * @exports GroupMembers
     * @classdesc Represents a GroupMembers.
     * @implements IGroupMembers
     * @constructor
     * @param {IGroupMembers=} [p] Properties to set
     */
    function GroupMembers(p) {
        this.groupMembers = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GroupMembers groupMembers.
     * @member {Array.<IGroupMember>} groupMembers
     * @memberof GroupMembers
     * @instance
     */
    GroupMembers.prototype.groupMembers = $util.emptyArray;

    /**
     * Creates a new GroupMembers instance using the specified properties.
     * @function create
     * @memberof GroupMembers
     * @static
     * @param {IGroupMembers=} [properties] Properties to set
     * @returns {GroupMembers} GroupMembers instance
     */
    GroupMembers.create = function create(properties) {
        return new GroupMembers(properties);
    };

    /**
     * Encodes the specified GroupMembers message. Does not implicitly {@link GroupMembers.verify|verify} messages.
     * @function encode
     * @memberof GroupMembers
     * @static
     * @param {IGroupMembers} m GroupMembers message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GroupMembers.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.groupMembers != null && m.groupMembers.length) {
            for (var i = 0; i < m.groupMembers.length; ++i)
                $root.GroupMember.encode(m.groupMembers[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a GroupMembers message from the specified reader or buffer.
     * @function decode
     * @memberof GroupMembers
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GroupMembers} GroupMembers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GroupMembers.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GroupMembers();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.groupMembers && m.groupMembers.length))
                        m.groupMembers = [];
                    m.groupMembers.push($root.GroupMember.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for GroupMembers
     * @function getTypeUrl
     * @memberof GroupMembers
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GroupMembers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GroupMembers";
    };

    return GroupMembers;
})();

$root.Timestamp = (function() {

    /**
     * Properties of a Timestamp.
     * @exports ITimestamp
     * @interface ITimestamp
     * @property {number|Long|null} [value] Timestamp value
     * @property {number|null} [scale] Timestamp scale
     */

    /**
     * Constructs a new Timestamp.
     * @exports Timestamp
     * @classdesc Represents a Timestamp.
     * @implements ITimestamp
     * @constructor
     * @param {ITimestamp=} [p] Properties to set
     */
    function Timestamp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Timestamp value.
     * @member {number|Long} value
     * @memberof Timestamp
     * @instance
     */
    Timestamp.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Timestamp scale.
     * @member {number} scale
     * @memberof Timestamp
     * @instance
     */
    Timestamp.prototype.scale = 0;

    /**
     * Creates a new Timestamp instance using the specified properties.
     * @function create
     * @memberof Timestamp
     * @static
     * @param {ITimestamp=} [properties] Properties to set
     * @returns {Timestamp} Timestamp instance
     */
    Timestamp.create = function create(properties) {
        return new Timestamp(properties);
    };

    /**
     * Encodes the specified Timestamp message. Does not implicitly {@link Timestamp.verify|verify} messages.
     * @function encode
     * @memberof Timestamp
     * @static
     * @param {ITimestamp} m Timestamp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Timestamp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.value != null && Object.hasOwnProperty.call(m, "value"))
            w.uint32(8).sint64(m.value);
        if (m.scale != null && Object.hasOwnProperty.call(m, "scale"))
            w.uint32(16).uint32(m.scale);
        return w;
    };

    /**
     * Decodes a Timestamp message from the specified reader or buffer.
     * @function decode
     * @memberof Timestamp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Timestamp} Timestamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Timestamp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Timestamp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.value = r.sint64();
                    break;
                }
            case 2: {
                    m.scale = r.uint32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for Timestamp
     * @function getTypeUrl
     * @memberof Timestamp
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Timestamp";
    };

    return Timestamp;
})();

$root.InGroup = (function() {

    /**
     * Properties of an InGroup.
     * @exports IInGroup
     * @interface IInGroup
     * @property {boolean|null} [inGroup] InGroup inGroup
     */

    /**
     * Constructs a new InGroup.
     * @exports InGroup
     * @classdesc Represents an InGroup.
     * @implements IInGroup
     * @constructor
     * @param {IInGroup=} [p] Properties to set
     */
    function InGroup(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * InGroup inGroup.
     * @member {boolean} inGroup
     * @memberof InGroup
     * @instance
     */
    InGroup.prototype.inGroup = false;

    /**
     * Creates a new InGroup instance using the specified properties.
     * @function create
     * @memberof InGroup
     * @static
     * @param {IInGroup=} [properties] Properties to set
     * @returns {InGroup} InGroup instance
     */
    InGroup.create = function create(properties) {
        return new InGroup(properties);
    };

    /**
     * Encodes the specified InGroup message. Does not implicitly {@link InGroup.verify|verify} messages.
     * @function encode
     * @memberof InGroup
     * @static
     * @param {IInGroup} m InGroup message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    InGroup.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.inGroup != null && Object.hasOwnProperty.call(m, "inGroup"))
            w.uint32(8).bool(m.inGroup);
        return w;
    };

    /**
     * Decodes an InGroup message from the specified reader or buffer.
     * @function decode
     * @memberof InGroup
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {InGroup} InGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    InGroup.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.InGroup();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.inGroup = r.bool();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for InGroup
     * @function getTypeUrl
     * @memberof InGroup
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    InGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/InGroup";
    };

    return InGroup;
})();

$root.Person = (function() {

    /**
     * Properties of a Person.
     * @exports IPerson
     * @interface IPerson
     * @property {string|null} [personId] Person personId
     * @property {string|null} [firstname] Person firstname
     * @property {string|null} [lastname] Person lastname
     */

    /**
     * Constructs a new Person.
     * @exports Person
     * @classdesc Represents a Person.
     * @implements IPerson
     * @constructor
     * @param {IPerson=} [p] Properties to set
     */
    function Person(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Person personId.
     * @member {string} personId
     * @memberof Person
     * @instance
     */
    Person.prototype.personId = "";

    /**
     * Person firstname.
     * @member {string} firstname
     * @memberof Person
     * @instance
     */
    Person.prototype.firstname = "";

    /**
     * Person lastname.
     * @member {string} lastname
     * @memberof Person
     * @instance
     */
    Person.prototype.lastname = "";

    /**
     * Creates a new Person instance using the specified properties.
     * @function create
     * @memberof Person
     * @static
     * @param {IPerson=} [properties] Properties to set
     * @returns {Person} Person instance
     */
    Person.create = function create(properties) {
        return new Person(properties);
    };

    /**
     * Encodes the specified Person message. Does not implicitly {@link Person.verify|verify} messages.
     * @function encode
     * @memberof Person
     * @static
     * @param {IPerson} m Person message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Person.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.personId != null && Object.hasOwnProperty.call(m, "personId"))
            w.uint32(10).string(m.personId);
        if (m.firstname != null && Object.hasOwnProperty.call(m, "firstname"))
            w.uint32(18).string(m.firstname);
        if (m.lastname != null && Object.hasOwnProperty.call(m, "lastname"))
            w.uint32(26).string(m.lastname);
        return w;
    };

    /**
     * Decodes a Person message from the specified reader or buffer.
     * @function decode
     * @memberof Person
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Person} Person
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Person.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Person();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.personId = r.string();
                    break;
                }
            case 2: {
                    m.firstname = r.string();
                    break;
                }
            case 3: {
                    m.lastname = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for Person
     * @function getTypeUrl
     * @memberof Person
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Person.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Person";
    };

    return Person;
})();

$root.RemoveUserResponse = (function() {

    /**
     * Properties of a RemoveUserResponse.
     * @exports IRemoveUserResponse
     * @interface IRemoveUserResponse
     * @property {ITimestamp|null} [expirationTime] RemoveUserResponse expirationTime
     */

    /**
     * Constructs a new RemoveUserResponse.
     * @exports RemoveUserResponse
     * @classdesc Represents a RemoveUserResponse.
     * @implements IRemoveUserResponse
     * @constructor
     * @param {IRemoveUserResponse=} [p] Properties to set
     */
    function RemoveUserResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RemoveUserResponse expirationTime.
     * @member {ITimestamp|null|undefined} expirationTime
     * @memberof RemoveUserResponse
     * @instance
     */
    RemoveUserResponse.prototype.expirationTime = null;

    /**
     * Creates a new RemoveUserResponse instance using the specified properties.
     * @function create
     * @memberof RemoveUserResponse
     * @static
     * @param {IRemoveUserResponse=} [properties] Properties to set
     * @returns {RemoveUserResponse} RemoveUserResponse instance
     */
    RemoveUserResponse.create = function create(properties) {
        return new RemoveUserResponse(properties);
    };

    /**
     * Encodes the specified RemoveUserResponse message. Does not implicitly {@link RemoveUserResponse.verify|verify} messages.
     * @function encode
     * @memberof RemoveUserResponse
     * @static
     * @param {IRemoveUserResponse} m RemoveUserResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveUserResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.expirationTime != null && Object.hasOwnProperty.call(m, "expirationTime"))
            $root.Timestamp.encode(m.expirationTime, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a RemoveUserResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RemoveUserResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RemoveUserResponse} RemoveUserResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveUserResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RemoveUserResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.expirationTime = $root.Timestamp.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for RemoveUserResponse
     * @function getTypeUrl
     * @memberof RemoveUserResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RemoveUserResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RemoveUserResponse";
    };

    return RemoveUserResponse;
})();

$root.SiteInfo = (function() {

    /**
     * Properties of a SiteInfo.
     * @exports ISiteInfo
     * @interface ISiteInfo
     * @property {string|null} [siteId] SiteInfo siteId
     * @property {number|null} [locationId] SiteInfo locationId
     * @property {string|null} [siteName] SiteInfo siteName
     */

    /**
     * Constructs a new SiteInfo.
     * @exports SiteInfo
     * @classdesc Represents a SiteInfo.
     * @implements ISiteInfo
     * @constructor
     * @param {ISiteInfo=} [p] Properties to set
     */
    function SiteInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SiteInfo siteId.
     * @member {string} siteId
     * @memberof SiteInfo
     * @instance
     */
    SiteInfo.prototype.siteId = "";

    /**
     * SiteInfo locationId.
     * @member {number} locationId
     * @memberof SiteInfo
     * @instance
     */
    SiteInfo.prototype.locationId = 0;

    /**
     * SiteInfo siteName.
     * @member {string} siteName
     * @memberof SiteInfo
     * @instance
     */
    SiteInfo.prototype.siteName = "";

    /**
     * Creates a new SiteInfo instance using the specified properties.
     * @function create
     * @memberof SiteInfo
     * @static
     * @param {ISiteInfo=} [properties] Properties to set
     * @returns {SiteInfo} SiteInfo instance
     */
    SiteInfo.create = function create(properties) {
        return new SiteInfo(properties);
    };

    /**
     * Encodes the specified SiteInfo message. Does not implicitly {@link SiteInfo.verify|verify} messages.
     * @function encode
     * @memberof SiteInfo
     * @static
     * @param {ISiteInfo} m SiteInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SiteInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.siteId != null && Object.hasOwnProperty.call(m, "siteId"))
            w.uint32(10).string(m.siteId);
        if (m.locationId != null && Object.hasOwnProperty.call(m, "locationId"))
            w.uint32(16).int32(m.locationId);
        if (m.siteName != null && Object.hasOwnProperty.call(m, "siteName"))
            w.uint32(26).string(m.siteName);
        return w;
    };

    /**
     * Decodes a SiteInfo message from the specified reader or buffer.
     * @function decode
     * @memberof SiteInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SiteInfo} SiteInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SiteInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SiteInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.siteId = r.string();
                    break;
                }
            case 2: {
                    m.locationId = r.int32();
                    break;
                }
            case 3: {
                    m.siteName = r.string();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for SiteInfo
     * @function getTypeUrl
     * @memberof SiteInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SiteInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SiteInfo";
    };

    return SiteInfo;
})();

$root.SiteInfos = (function() {

    /**
     * Properties of a SiteInfos.
     * @exports ISiteInfos
     * @interface ISiteInfos
     * @property {Array.<ISiteInfo>|null} [siteInfos] SiteInfos siteInfos
     */

    /**
     * Constructs a new SiteInfos.
     * @exports SiteInfos
     * @classdesc Represents a SiteInfos.
     * @implements ISiteInfos
     * @constructor
     * @param {ISiteInfos=} [p] Properties to set
     */
    function SiteInfos(p) {
        this.siteInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SiteInfos siteInfos.
     * @member {Array.<ISiteInfo>} siteInfos
     * @memberof SiteInfos
     * @instance
     */
    SiteInfos.prototype.siteInfos = $util.emptyArray;

    /**
     * Creates a new SiteInfos instance using the specified properties.
     * @function create
     * @memberof SiteInfos
     * @static
     * @param {ISiteInfos=} [properties] Properties to set
     * @returns {SiteInfos} SiteInfos instance
     */
    SiteInfos.create = function create(properties) {
        return new SiteInfos(properties);
    };

    /**
     * Encodes the specified SiteInfos message. Does not implicitly {@link SiteInfos.verify|verify} messages.
     * @function encode
     * @memberof SiteInfos
     * @static
     * @param {ISiteInfos} m SiteInfos message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SiteInfos.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.siteInfos != null && m.siteInfos.length) {
            for (var i = 0; i < m.siteInfos.length; ++i)
                $root.SiteInfo.encode(m.siteInfos[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a SiteInfos message from the specified reader or buffer.
     * @function decode
     * @memberof SiteInfos
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SiteInfos} SiteInfos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SiteInfos.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SiteInfos();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.siteInfos && m.siteInfos.length))
                        m.siteInfos = [];
                    m.siteInfos.push($root.SiteInfo.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for SiteInfos
     * @function getTypeUrl
     * @memberof SiteInfos
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SiteInfos.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SiteInfos";
    };

    return SiteInfos;
})();

$root.UpdateUacMemberRequest = (function() {

    /**
     * Properties of an UpdateUacMemberRequest.
     * @exports IUpdateUacMemberRequest
     * @interface IUpdateUacMemberRequest
     * @property {ITimestamp|null} [expirationTime] UpdateUacMemberRequest expirationTime
     */

    /**
     * Constructs a new UpdateUacMemberRequest.
     * @exports UpdateUacMemberRequest
     * @classdesc Represents an UpdateUacMemberRequest.
     * @implements IUpdateUacMemberRequest
     * @constructor
     * @param {IUpdateUacMemberRequest=} [p] Properties to set
     */
    function UpdateUacMemberRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UpdateUacMemberRequest expirationTime.
     * @member {ITimestamp|null|undefined} expirationTime
     * @memberof UpdateUacMemberRequest
     * @instance
     */
    UpdateUacMemberRequest.prototype.expirationTime = null;

    /**
     * Creates a new UpdateUacMemberRequest instance using the specified properties.
     * @function create
     * @memberof UpdateUacMemberRequest
     * @static
     * @param {IUpdateUacMemberRequest=} [properties] Properties to set
     * @returns {UpdateUacMemberRequest} UpdateUacMemberRequest instance
     */
    UpdateUacMemberRequest.create = function create(properties) {
        return new UpdateUacMemberRequest(properties);
    };

    /**
     * Encodes the specified UpdateUacMemberRequest message. Does not implicitly {@link UpdateUacMemberRequest.verify|verify} messages.
     * @function encode
     * @memberof UpdateUacMemberRequest
     * @static
     * @param {IUpdateUacMemberRequest} m UpdateUacMemberRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateUacMemberRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.expirationTime != null && Object.hasOwnProperty.call(m, "expirationTime"))
            $root.Timestamp.encode(m.expirationTime, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes an UpdateUacMemberRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateUacMemberRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UpdateUacMemberRequest} UpdateUacMemberRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateUacMemberRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UpdateUacMemberRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.expirationTime = $root.Timestamp.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for UpdateUacMemberRequest
     * @function getTypeUrl
     * @memberof UpdateUacMemberRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UpdateUacMemberRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UpdateUacMemberRequest";
    };

    return UpdateUacMemberRequest;
})();

$root.CreateUserGroupRequest = (function() {

    /**
     * Properties of a CreateUserGroupRequest.
     * @exports ICreateUserGroupRequest
     * @interface ICreateUserGroupRequest
     * @property {Array.<string>|null} [users] CreateUserGroupRequest users
     */

    /**
     * Constructs a new CreateUserGroupRequest.
     * @exports CreateUserGroupRequest
     * @classdesc Represents a CreateUserGroupRequest.
     * @implements ICreateUserGroupRequest
     * @constructor
     * @param {ICreateUserGroupRequest=} [p] Properties to set
     */
    function CreateUserGroupRequest(p) {
        this.users = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CreateUserGroupRequest users.
     * @member {Array.<string>} users
     * @memberof CreateUserGroupRequest
     * @instance
     */
    CreateUserGroupRequest.prototype.users = $util.emptyArray;

    /**
     * Creates a new CreateUserGroupRequest instance using the specified properties.
     * @function create
     * @memberof CreateUserGroupRequest
     * @static
     * @param {ICreateUserGroupRequest=} [properties] Properties to set
     * @returns {CreateUserGroupRequest} CreateUserGroupRequest instance
     */
    CreateUserGroupRequest.create = function create(properties) {
        return new CreateUserGroupRequest(properties);
    };

    /**
     * Encodes the specified CreateUserGroupRequest message. Does not implicitly {@link CreateUserGroupRequest.verify|verify} messages.
     * @function encode
     * @memberof CreateUserGroupRequest
     * @static
     * @param {ICreateUserGroupRequest} m CreateUserGroupRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateUserGroupRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.users != null && m.users.length) {
            for (var i = 0; i < m.users.length; ++i)
                w.uint32(802).string(m.users[i]);
        }
        return w;
    };

    /**
     * Decodes a CreateUserGroupRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CreateUserGroupRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CreateUserGroupRequest} CreateUserGroupRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateUserGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CreateUserGroupRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 100: {
                    if (!(m.users && m.users.length))
                        m.users = [];
                    m.users.push(r.string());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for CreateUserGroupRequest
     * @function getTypeUrl
     * @memberof CreateUserGroupRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CreateUserGroupRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CreateUserGroupRequest";
    };

    return CreateUserGroupRequest;
})();

$root.UserGroup = (function() {

    /**
     * Properties of a UserGroup.
     * @exports IUserGroup
     * @interface IUserGroup
     * @property {number|null} [id] UserGroup id
     * @property {string|null} [showName] UserGroup showName
     * @property {string|null} [description] UserGroup description
     * @property {string|null} [siteId] UserGroup siteId
     * @property {number|null} [pageId] UserGroup pageId
     * @property {number|null} [parentGroupId] UserGroup parentGroupId
     * @property {number|null} [userCount] UserGroup userCount
     * @property {number|null} [invitationCount] UserGroup invitationCount
     * @property {boolean|null} [isSystemGroup] UserGroup isSystemGroup
     * @property {boolean|null} [enableMembercard] UserGroup enableMembercard
     * @property {boolean|null} [IsInternal] UserGroup IsInternal
     * @property {boolean|null} [EnforceTwoFactorAuth] UserGroup EnforceTwoFactorAuth
     * @property {number|null} [walletReservationGroupId] UserGroup walletReservationGroupId
     * @property {ICreateUserGroupRequest|null} [createUserGroupRequest] UserGroup createUserGroupRequest
     * @property {IUserGroupMeta|null} [userGroupMeta] UserGroup userGroupMeta
     */

    /**
     * Constructs a new UserGroup.
     * @exports UserGroup
     * @classdesc Represents a UserGroup.
     * @implements IUserGroup
     * @constructor
     * @param {IUserGroup=} [p] Properties to set
     */
    function UserGroup(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UserGroup id.
     * @member {number} id
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.id = 0;

    /**
     * UserGroup showName.
     * @member {string} showName
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.showName = "";

    /**
     * UserGroup description.
     * @member {string} description
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.description = "";

    /**
     * UserGroup siteId.
     * @member {string} siteId
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.siteId = "";

    /**
     * UserGroup pageId.
     * @member {number} pageId
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.pageId = 0;

    /**
     * UserGroup parentGroupId.
     * @member {number} parentGroupId
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.parentGroupId = 0;

    /**
     * UserGroup userCount.
     * @member {number} userCount
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.userCount = 0;

    /**
     * UserGroup invitationCount.
     * @member {number} invitationCount
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.invitationCount = 0;

    /**
     * UserGroup isSystemGroup.
     * @member {boolean} isSystemGroup
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.isSystemGroup = false;

    /**
     * UserGroup enableMembercard.
     * @member {boolean} enableMembercard
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.enableMembercard = false;

    /**
     * UserGroup IsInternal.
     * @member {boolean|null|undefined} IsInternal
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.IsInternal = null;

    /**
     * UserGroup EnforceTwoFactorAuth.
     * @member {boolean|null|undefined} EnforceTwoFactorAuth
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.EnforceTwoFactorAuth = null;

    /**
     * UserGroup walletReservationGroupId.
     * @member {number} walletReservationGroupId
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.walletReservationGroupId = 0;

    /**
     * UserGroup createUserGroupRequest.
     * @member {ICreateUserGroupRequest|null|undefined} createUserGroupRequest
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.createUserGroupRequest = null;

    /**
     * UserGroup userGroupMeta.
     * @member {IUserGroupMeta|null|undefined} userGroupMeta
     * @memberof UserGroup
     * @instance
     */
    UserGroup.prototype.userGroupMeta = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * UserGroup _IsInternal.
     * @member {"IsInternal"|undefined} _IsInternal
     * @memberof UserGroup
     * @instance
     */
    Object.defineProperty(UserGroup.prototype, "_IsInternal", {
        get: $util.oneOfGetter($oneOfFields = ["IsInternal"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * UserGroup _EnforceTwoFactorAuth.
     * @member {"EnforceTwoFactorAuth"|undefined} _EnforceTwoFactorAuth
     * @memberof UserGroup
     * @instance
     */
    Object.defineProperty(UserGroup.prototype, "_EnforceTwoFactorAuth", {
        get: $util.oneOfGetter($oneOfFields = ["EnforceTwoFactorAuth"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * UserGroup _createUserGroupRequest.
     * @member {"createUserGroupRequest"|undefined} _createUserGroupRequest
     * @memberof UserGroup
     * @instance
     */
    Object.defineProperty(UserGroup.prototype, "_createUserGroupRequest", {
        get: $util.oneOfGetter($oneOfFields = ["createUserGroupRequest"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * UserGroup _userGroupMeta.
     * @member {"userGroupMeta"|undefined} _userGroupMeta
     * @memberof UserGroup
     * @instance
     */
    Object.defineProperty(UserGroup.prototype, "_userGroupMeta", {
        get: $util.oneOfGetter($oneOfFields = ["userGroupMeta"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new UserGroup instance using the specified properties.
     * @function create
     * @memberof UserGroup
     * @static
     * @param {IUserGroup=} [properties] Properties to set
     * @returns {UserGroup} UserGroup instance
     */
    UserGroup.create = function create(properties) {
        return new UserGroup(properties);
    };

    /**
     * Encodes the specified UserGroup message. Does not implicitly {@link UserGroup.verify|verify} messages.
     * @function encode
     * @memberof UserGroup
     * @static
     * @param {IUserGroup} m UserGroup message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserGroup.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(8).int32(m.id);
        if (m.showName != null && Object.hasOwnProperty.call(m, "showName"))
            w.uint32(18).string(m.showName);
        if (m.description != null && Object.hasOwnProperty.call(m, "description"))
            w.uint32(26).string(m.description);
        if (m.siteId != null && Object.hasOwnProperty.call(m, "siteId"))
            w.uint32(34).string(m.siteId);
        if (m.pageId != null && Object.hasOwnProperty.call(m, "pageId"))
            w.uint32(40).int32(m.pageId);
        if (m.parentGroupId != null && Object.hasOwnProperty.call(m, "parentGroupId"))
            w.uint32(48).int32(m.parentGroupId);
        if (m.userCount != null && Object.hasOwnProperty.call(m, "userCount"))
            w.uint32(56).int32(m.userCount);
        if (m.invitationCount != null && Object.hasOwnProperty.call(m, "invitationCount"))
            w.uint32(64).int32(m.invitationCount);
        if (m.isSystemGroup != null && Object.hasOwnProperty.call(m, "isSystemGroup"))
            w.uint32(72).bool(m.isSystemGroup);
        if (m.enableMembercard != null && Object.hasOwnProperty.call(m, "enableMembercard"))
            w.uint32(80).bool(m.enableMembercard);
        if (m.IsInternal != null && Object.hasOwnProperty.call(m, "IsInternal"))
            w.uint32(88).bool(m.IsInternal);
        if (m.EnforceTwoFactorAuth != null && Object.hasOwnProperty.call(m, "EnforceTwoFactorAuth"))
            w.uint32(96).bool(m.EnforceTwoFactorAuth);
        if (m.walletReservationGroupId != null && Object.hasOwnProperty.call(m, "walletReservationGroupId"))
            w.uint32(8008).int32(m.walletReservationGroupId);
        if (m.createUserGroupRequest != null && Object.hasOwnProperty.call(m, "createUserGroupRequest"))
            $root.CreateUserGroupRequest.encode(m.createUserGroupRequest, w.uint32(80002).fork()).ldelim();
        if (m.userGroupMeta != null && Object.hasOwnProperty.call(m, "userGroupMeta"))
            $root.UserGroupMeta.encode(m.userGroupMeta, w.uint32(80010).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a UserGroup message from the specified reader or buffer.
     * @function decode
     * @memberof UserGroup
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UserGroup} UserGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserGroup.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UserGroup();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.id = r.int32();
                    break;
                }
            case 2: {
                    m.showName = r.string();
                    break;
                }
            case 3: {
                    m.description = r.string();
                    break;
                }
            case 4: {
                    m.siteId = r.string();
                    break;
                }
            case 5: {
                    m.pageId = r.int32();
                    break;
                }
            case 6: {
                    m.parentGroupId = r.int32();
                    break;
                }
            case 7: {
                    m.userCount = r.int32();
                    break;
                }
            case 8: {
                    m.invitationCount = r.int32();
                    break;
                }
            case 9: {
                    m.isSystemGroup = r.bool();
                    break;
                }
            case 10: {
                    m.enableMembercard = r.bool();
                    break;
                }
            case 11: {
                    m.IsInternal = r.bool();
                    break;
                }
            case 12: {
                    m.EnforceTwoFactorAuth = r.bool();
                    break;
                }
            case 1001: {
                    m.walletReservationGroupId = r.int32();
                    break;
                }
            case 10000: {
                    m.createUserGroupRequest = $root.CreateUserGroupRequest.decode(r, r.uint32());
                    break;
                }
            case 10001: {
                    m.userGroupMeta = $root.UserGroupMeta.decode(r, r.uint32());
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for UserGroup
     * @function getTypeUrl
     * @memberof UserGroup
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UserGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UserGroup";
    };

    return UserGroup;
})();

$root.UserGroupMeta = (function() {

    /**
     * Properties of a UserGroupMeta.
     * @exports IUserGroupMeta
     * @interface IUserGroupMeta
     * @property {IDecimal|null} [admissionFee] UserGroupMeta admissionFee
     * @property {number|Long|null} [admissionFeeArticleId] UserGroupMeta admissionFeeArticleId
     * @property {IDecimal|null} [subscriptionPrice] UserGroupMeta subscriptionPrice
     * @property {number|Long|null} [subscriptionArticleId] UserGroupMeta subscriptionArticleId
     * @property {string|null} [membercardCancellationDescription] UserGroupMeta membercardCancellationDescription
     * @property {number|null} [subscriptionInterval] UserGroupMeta subscriptionInterval
     * @property {number|null} [memberLimit] UserGroupMeta memberLimit
     * @property {number|null} [walletReservationGroupId] UserGroupMeta walletReservationGroupId
     */

    /**
     * Constructs a new UserGroupMeta.
     * @exports UserGroupMeta
     * @classdesc Represents a UserGroupMeta.
     * @implements IUserGroupMeta
     * @constructor
     * @param {IUserGroupMeta=} [p] Properties to set
     */
    function UserGroupMeta(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UserGroupMeta admissionFee.
     * @member {IDecimal|null|undefined} admissionFee
     * @memberof UserGroupMeta
     * @instance
     */
    UserGroupMeta.prototype.admissionFee = null;

    /**
     * UserGroupMeta admissionFeeArticleId.
     * @member {number|Long} admissionFeeArticleId
     * @memberof UserGroupMeta
     * @instance
     */
    UserGroupMeta.prototype.admissionFeeArticleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UserGroupMeta subscriptionPrice.
     * @member {IDecimal|null|undefined} subscriptionPrice
     * @memberof UserGroupMeta
     * @instance
     */
    UserGroupMeta.prototype.subscriptionPrice = null;

    /**
     * UserGroupMeta subscriptionArticleId.
     * @member {number|Long} subscriptionArticleId
     * @memberof UserGroupMeta
     * @instance
     */
    UserGroupMeta.prototype.subscriptionArticleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UserGroupMeta membercardCancellationDescription.
     * @member {string} membercardCancellationDescription
     * @memberof UserGroupMeta
     * @instance
     */
    UserGroupMeta.prototype.membercardCancellationDescription = "";

    /**
     * UserGroupMeta subscriptionInterval.
     * @member {number} subscriptionInterval
     * @memberof UserGroupMeta
     * @instance
     */
    UserGroupMeta.prototype.subscriptionInterval = 0;

    /**
     * UserGroupMeta memberLimit.
     * @member {number|null|undefined} memberLimit
     * @memberof UserGroupMeta
     * @instance
     */
    UserGroupMeta.prototype.memberLimit = null;

    /**
     * UserGroupMeta walletReservationGroupId.
     * @member {number} walletReservationGroupId
     * @memberof UserGroupMeta
     * @instance
     */
    UserGroupMeta.prototype.walletReservationGroupId = 0;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * UserGroupMeta _memberLimit.
     * @member {"memberLimit"|undefined} _memberLimit
     * @memberof UserGroupMeta
     * @instance
     */
    Object.defineProperty(UserGroupMeta.prototype, "_memberLimit", {
        get: $util.oneOfGetter($oneOfFields = ["memberLimit"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new UserGroupMeta instance using the specified properties.
     * @function create
     * @memberof UserGroupMeta
     * @static
     * @param {IUserGroupMeta=} [properties] Properties to set
     * @returns {UserGroupMeta} UserGroupMeta instance
     */
    UserGroupMeta.create = function create(properties) {
        return new UserGroupMeta(properties);
    };

    /**
     * Encodes the specified UserGroupMeta message. Does not implicitly {@link UserGroupMeta.verify|verify} messages.
     * @function encode
     * @memberof UserGroupMeta
     * @static
     * @param {IUserGroupMeta} m UserGroupMeta message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserGroupMeta.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.admissionFee != null && Object.hasOwnProperty.call(m, "admissionFee"))
            $root.Decimal.encode(m.admissionFee, w.uint32(802).fork()).ldelim();
        if (m.admissionFeeArticleId != null && Object.hasOwnProperty.call(m, "admissionFeeArticleId"))
            w.uint32(808).int64(m.admissionFeeArticleId);
        if (m.subscriptionPrice != null && Object.hasOwnProperty.call(m, "subscriptionPrice"))
            $root.Decimal.encode(m.subscriptionPrice, w.uint32(818).fork()).ldelim();
        if (m.subscriptionArticleId != null && Object.hasOwnProperty.call(m, "subscriptionArticleId"))
            w.uint32(824).int64(m.subscriptionArticleId);
        if (m.membercardCancellationDescription != null && Object.hasOwnProperty.call(m, "membercardCancellationDescription"))
            w.uint32(834).string(m.membercardCancellationDescription);
        if (m.subscriptionInterval != null && Object.hasOwnProperty.call(m, "subscriptionInterval"))
            w.uint32(840).int32(m.subscriptionInterval);
        if (m.memberLimit != null && Object.hasOwnProperty.call(m, "memberLimit"))
            w.uint32(848).int32(m.memberLimit);
        if (m.walletReservationGroupId != null && Object.hasOwnProperty.call(m, "walletReservationGroupId"))
            w.uint32(8008).int32(m.walletReservationGroupId);
        return w;
    };

    /**
     * Decodes a UserGroupMeta message from the specified reader or buffer.
     * @function decode
     * @memberof UserGroupMeta
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UserGroupMeta} UserGroupMeta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserGroupMeta.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UserGroupMeta();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 100: {
                    m.admissionFee = $root.Decimal.decode(r, r.uint32());
                    break;
                }
            case 101: {
                    m.admissionFeeArticleId = r.int64();
                    break;
                }
            case 102: {
                    m.subscriptionPrice = $root.Decimal.decode(r, r.uint32());
                    break;
                }
            case 103: {
                    m.subscriptionArticleId = r.int64();
                    break;
                }
            case 104: {
                    m.membercardCancellationDescription = r.string();
                    break;
                }
            case 105: {
                    m.subscriptionInterval = r.int32();
                    break;
                }
            case 106: {
                    m.memberLimit = r.int32();
                    break;
                }
            case 1001: {
                    m.walletReservationGroupId = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for UserGroupMeta
     * @function getTypeUrl
     * @memberof UserGroupMeta
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UserGroupMeta.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UserGroupMeta";
    };

    return UserGroupMeta;
})();

$root.UserGroups = (function() {

    /**
     * Properties of a UserGroups.
     * @exports IUserGroups
     * @interface IUserGroups
     * @property {Array.<IUserGroup>|null} [userGroups] UserGroups userGroups
     */

    /**
     * Constructs a new UserGroups.
     * @exports UserGroups
     * @classdesc Represents a UserGroups.
     * @implements IUserGroups
     * @constructor
     * @param {IUserGroups=} [p] Properties to set
     */
    function UserGroups(p) {
        this.userGroups = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UserGroups userGroups.
     * @member {Array.<IUserGroup>} userGroups
     * @memberof UserGroups
     * @instance
     */
    UserGroups.prototype.userGroups = $util.emptyArray;

    /**
     * Creates a new UserGroups instance using the specified properties.
     * @function create
     * @memberof UserGroups
     * @static
     * @param {IUserGroups=} [properties] Properties to set
     * @returns {UserGroups} UserGroups instance
     */
    UserGroups.create = function create(properties) {
        return new UserGroups(properties);
    };

    /**
     * Encodes the specified UserGroups message. Does not implicitly {@link UserGroups.verify|verify} messages.
     * @function encode
     * @memberof UserGroups
     * @static
     * @param {IUserGroups} m UserGroups message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserGroups.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.userGroups != null && m.userGroups.length) {
            for (var i = 0; i < m.userGroups.length; ++i)
                $root.UserGroup.encode(m.userGroups[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a UserGroups message from the specified reader or buffer.
     * @function decode
     * @memberof UserGroups
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UserGroups} UserGroups
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserGroups.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UserGroups();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    if (!(m.userGroups && m.userGroups.length))
                        m.userGroups = [];
                    m.userGroups.push($root.UserGroup.decode(r, r.uint32()));
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for UserGroups
     * @function getTypeUrl
     * @memberof UserGroups
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UserGroups.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UserGroups";
    };

    return UserGroups;
})();

$root.UserGroupUpdateRequest = (function() {

    /**
     * Properties of a UserGroupUpdateRequest.
     * @exports IUserGroupUpdateRequest
     * @interface IUserGroupUpdateRequest
     * @property {string|null} [showName] UserGroupUpdateRequest showName
     * @property {string|null} [description] UserGroupUpdateRequest description
     * @property {number|null} [pageId] UserGroupUpdateRequest pageId
     * @property {number|null} [parentGroupId] UserGroupUpdateRequest parentGroupId
     * @property {boolean|null} [enableMembercard] UserGroupUpdateRequest enableMembercard
     * @property {string|null} [membercardCancellationDescription] UserGroupUpdateRequest membercardCancellationDescription
     * @property {boolean|null} [EnforceTwoFactorAuth] UserGroupUpdateRequest EnforceTwoFactorAuth
     * @property {number|null} [MemberLimit] UserGroupUpdateRequest MemberLimit
     */

    /**
     * Constructs a new UserGroupUpdateRequest.
     * @exports UserGroupUpdateRequest
     * @classdesc Represents a UserGroupUpdateRequest.
     * @implements IUserGroupUpdateRequest
     * @constructor
     * @param {IUserGroupUpdateRequest=} [p] Properties to set
     */
    function UserGroupUpdateRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UserGroupUpdateRequest showName.
     * @member {string} showName
     * @memberof UserGroupUpdateRequest
     * @instance
     */
    UserGroupUpdateRequest.prototype.showName = "";

    /**
     * UserGroupUpdateRequest description.
     * @member {string} description
     * @memberof UserGroupUpdateRequest
     * @instance
     */
    UserGroupUpdateRequest.prototype.description = "";

    /**
     * UserGroupUpdateRequest pageId.
     * @member {number} pageId
     * @memberof UserGroupUpdateRequest
     * @instance
     */
    UserGroupUpdateRequest.prototype.pageId = 0;

    /**
     * UserGroupUpdateRequest parentGroupId.
     * @member {number} parentGroupId
     * @memberof UserGroupUpdateRequest
     * @instance
     */
    UserGroupUpdateRequest.prototype.parentGroupId = 0;

    /**
     * UserGroupUpdateRequest enableMembercard.
     * @member {boolean} enableMembercard
     * @memberof UserGroupUpdateRequest
     * @instance
     */
    UserGroupUpdateRequest.prototype.enableMembercard = false;

    /**
     * UserGroupUpdateRequest membercardCancellationDescription.
     * @member {string} membercardCancellationDescription
     * @memberof UserGroupUpdateRequest
     * @instance
     */
    UserGroupUpdateRequest.prototype.membercardCancellationDescription = "";

    /**
     * UserGroupUpdateRequest EnforceTwoFactorAuth.
     * @member {boolean|null|undefined} EnforceTwoFactorAuth
     * @memberof UserGroupUpdateRequest
     * @instance
     */
    UserGroupUpdateRequest.prototype.EnforceTwoFactorAuth = null;

    /**
     * UserGroupUpdateRequest MemberLimit.
     * @member {number|null|undefined} MemberLimit
     * @memberof UserGroupUpdateRequest
     * @instance
     */
    UserGroupUpdateRequest.prototype.MemberLimit = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * UserGroupUpdateRequest _EnforceTwoFactorAuth.
     * @member {"EnforceTwoFactorAuth"|undefined} _EnforceTwoFactorAuth
     * @memberof UserGroupUpdateRequest
     * @instance
     */
    Object.defineProperty(UserGroupUpdateRequest.prototype, "_EnforceTwoFactorAuth", {
        get: $util.oneOfGetter($oneOfFields = ["EnforceTwoFactorAuth"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * UserGroupUpdateRequest _MemberLimit.
     * @member {"MemberLimit"|undefined} _MemberLimit
     * @memberof UserGroupUpdateRequest
     * @instance
     */
    Object.defineProperty(UserGroupUpdateRequest.prototype, "_MemberLimit", {
        get: $util.oneOfGetter($oneOfFields = ["MemberLimit"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new UserGroupUpdateRequest instance using the specified properties.
     * @function create
     * @memberof UserGroupUpdateRequest
     * @static
     * @param {IUserGroupUpdateRequest=} [properties] Properties to set
     * @returns {UserGroupUpdateRequest} UserGroupUpdateRequest instance
     */
    UserGroupUpdateRequest.create = function create(properties) {
        return new UserGroupUpdateRequest(properties);
    };

    /**
     * Encodes the specified UserGroupUpdateRequest message. Does not implicitly {@link UserGroupUpdateRequest.verify|verify} messages.
     * @function encode
     * @memberof UserGroupUpdateRequest
     * @static
     * @param {IUserGroupUpdateRequest} m UserGroupUpdateRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserGroupUpdateRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.showName != null && Object.hasOwnProperty.call(m, "showName"))
            w.uint32(10).string(m.showName);
        if (m.description != null && Object.hasOwnProperty.call(m, "description"))
            w.uint32(18).string(m.description);
        if (m.pageId != null && Object.hasOwnProperty.call(m, "pageId"))
            w.uint32(32).int32(m.pageId);
        if (m.parentGroupId != null && Object.hasOwnProperty.call(m, "parentGroupId"))
            w.uint32(40).int32(m.parentGroupId);
        if (m.enableMembercard != null && Object.hasOwnProperty.call(m, "enableMembercard"))
            w.uint32(48).bool(m.enableMembercard);
        if (m.membercardCancellationDescription != null && Object.hasOwnProperty.call(m, "membercardCancellationDescription"))
            w.uint32(58).string(m.membercardCancellationDescription);
        if (m.EnforceTwoFactorAuth != null && Object.hasOwnProperty.call(m, "EnforceTwoFactorAuth"))
            w.uint32(64).bool(m.EnforceTwoFactorAuth);
        if (m.MemberLimit != null && Object.hasOwnProperty.call(m, "MemberLimit"))
            w.uint32(72).int32(m.MemberLimit);
        return w;
    };

    /**
     * Decodes a UserGroupUpdateRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UserGroupUpdateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UserGroupUpdateRequest} UserGroupUpdateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserGroupUpdateRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UserGroupUpdateRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1: {
                    m.showName = r.string();
                    break;
                }
            case 2: {
                    m.description = r.string();
                    break;
                }
            case 4: {
                    m.pageId = r.int32();
                    break;
                }
            case 5: {
                    m.parentGroupId = r.int32();
                    break;
                }
            case 6: {
                    m.enableMembercard = r.bool();
                    break;
                }
            case 7: {
                    m.membercardCancellationDescription = r.string();
                    break;
                }
            case 8: {
                    m.EnforceTwoFactorAuth = r.bool();
                    break;
                }
            case 9: {
                    m.MemberLimit = r.int32();
                    break;
                }
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    /**
     * Gets the default type url for UserGroupUpdateRequest
     * @function getTypeUrl
     * @memberof UserGroupUpdateRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UserGroupUpdateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UserGroupUpdateRequest";
    };

    return UserGroupUpdateRequest;
})();

module.exports = $root;
