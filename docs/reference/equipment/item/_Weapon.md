# [TITLE MISSING]

## Definitions

### <a name="PrimaryAttributeDamageThreshold"></a> `PrimaryAttributeDamageThreshold`

The primary attribute damage and threshold value. You can either use an integer, an object or a pair. Use an integer if you just have to define a single threshold value for the default primary attribute of the combat technique. Use an object if you need to define the value only or if you need to define the value as well as a single different primary attribute than which the combat technique uses. Use the pair if you need to set the primary attributes to AGI and STR (the combat technique has AGI but this item has AGI/STR) and/or if you need to set different thresholds for AGI and STR (e.g. AGI 14/STR 15). If the same values are in the pair, they will be merged (AGI 14/STR 14 will be AGI/STR 14).

- **Type:** Union
- **Cases:** <a href="#PrimaryAttributeDamageThreshold'Default">PrimaryAttributeDamageThreshold'Default</a> | <a href="#PrimaryAttributeDamageThreshold'List">PrimaryAttributeDamageThreshold'List</a>

---

### <a name="PrimaryAttributeDamageThreshold'Default"></a> `PrimaryAttributeDamageThreshold'Default`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PrimaryAttributeDamageThreshold'Default/tag">See details</a>
`default` |  | <a href="#PrimaryAttributeDamageThreshold'Default/default">See details</a>

#### <a name="PrimaryAttributeDamageThreshold'Default/tag"></a> `tag`

- **Constant:** `"Default"`

#### <a name="PrimaryAttributeDamageThreshold'Default/default"></a> `default`

- **Type:** <a href="#DefaultPrimaryAttributeDamageThreshold">DefaultPrimaryAttributeDamageThreshold</a>

---

### <a name="PrimaryAttributeDamageThreshold'List"></a> `PrimaryAttributeDamageThreshold'List`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PrimaryAttributeDamageThreshold'List/tag">See details</a>
`list` |  | <a href="#PrimaryAttributeDamageThreshold'List/list">See details</a>

#### <a name="PrimaryAttributeDamageThreshold'List/tag"></a> `tag`

- **Constant:** `"List"`

#### <a name="PrimaryAttributeDamageThreshold'List/list"></a> `list`

- **Type:** <a href="#PrimaryAttributeDamageThresholdList">PrimaryAttributeDamageThresholdList</a>

---

### <a name="DefaultPrimaryAttributeDamageThreshold"></a> `DefaultPrimaryAttributeDamageThreshold`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`threshold` | The attribute value representing the damage threshold for the primary attribute of the item's combat technique. | <a href="#DefaultPrimaryAttributeDamageThreshold/threshold">See details</a>

#### <a name="DefaultPrimaryAttributeDamageThreshold/threshold"></a> `threshold`

The attribute value representing the damage threshold for the primary attribute of the item's combat technique.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PrimaryAttributeDamageThresholdList"></a> `PrimaryAttributeDamageThresholdList`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | A list of primary attributes with their associated threshold. | <a href="#PrimaryAttributeDamageThresholdList/list">See details</a>

#### <a name="PrimaryAttributeDamageThresholdList/list"></a> `list`

A list of primary attributes with their associated threshold.

- **Type:** List
- **Items:** <a href="#PrimaryAttributeDamageThresholdList/list[]">PrimaryAttributeDamageThresholdList/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="PrimaryAttributeDamageThresholdList/list[]"></a> `PrimaryAttributeDamageThresholdList/list[]`

- **Type:** <a href="#SinglePrimaryAttributeDamageThreshold">SinglePrimaryAttributeDamageThreshold</a>

---

### <a name="SinglePrimaryAttributeDamageThreshold"></a> `SinglePrimaryAttributeDamageThreshold`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`attribute` | The primary attribute. | <a href="#SinglePrimaryAttributeDamageThreshold/attribute">See details</a>
`threshold` | The attribute value representing the damage threshold. | <a href="#SinglePrimaryAttributeDamageThreshold/threshold">See details</a>

#### <a name="SinglePrimaryAttributeDamageThreshold/attribute"></a> `attribute`

The primary attribute.

- **Type:** <a href="../../_SimpleReferences.md#AttributeReference">AttributeReference</a>

#### <a name="SinglePrimaryAttributeDamageThreshold/threshold"></a> `threshold`

The attribute value representing the damage threshold.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Length"></a> `Length`

The length of the weapon in cm/halffingers.

- **Type:** Integer
- **Minimum:** `1`
