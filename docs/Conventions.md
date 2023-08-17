# Conventions

## Branch Names

Branch names mostly follow [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/): You have two main branches, `master` and `develop`, and then different types of branches that share common prefixes:

- `feature/` branches are for new content or functionality. Example: `feature/gods-of-aventuria`
- `fix/` branches are for fixes
- `release/` branches are only used for releases and usually only created by @elyukai.
- `hotfix/` branches are only used for production fixes that need to be quickly resolved.

## Commit Messages

Git commit messages should follow [semantic commit messages](https://nitayneeman.com/posts/understanding-semantic-commit-messages-using-git-and-angular) if possible.

### Possible scopes

- *empty*: Generic
- `t9n`: Translation content
- `schema`: Schema content

### Examples

- `feat: add liturgical chants from AGÖ5`
- `feat(t9n): add Italian liturgical chants from AGÖ2`
- `feat(schema): add generic casting time field`
- `fix: wrong IC of spell Odem Arcanum`

## Data File Names

### Form

`<Id>_<Name>.yml`

#### Parameters

- `<Id>` is the numeric id of the entry.
- `<Name>` is the English name (if no English name is available, its the German name). The name needs to be adjusted so no special characters and no spaces are used. The complete list of replacement rules can be found below.

#### Examples

- `1_Noble.yml`

### Replacement Rules for Names

- Always start with an uppercase letter even if the entry name itself doesn't start with an uppercase letter.
- Spaces are replaced with `-`.
- Modified letters (such as á) are converted to their base letter.
- The German umlauts are converted into their diphthongs (ä &rArr; ae, …).
- `ß` is converted into `ss`.
- Apostrophes are removed.
- Other special characters are replaced with `-`, but note that if there are multiple hyphens directly after another, merge them to just one hyphen.

## Property Order

The order of properties follows the order in which they are listed in the official publications. Exceptions are the `src` and the `translation` properties, which always occur at the end of an object. The order of properties can also be checked out in the respective schema file.

Some entities also offer a template in the `/Templates` folder, which, if it's schema is called `X.schema.json`, is called `X.yml`. You can use that to create new files more easily and also automatically conform to the property order.

## Schema File Names

### Form

`<Entity>.schema.json`

#### Parameters

- `<Entity>` is the entity name in pascal case. An `_` has to be prepended to the entity name if the entity does not represent an entire entity but instead is only used as a sub-schema for other schemes.
