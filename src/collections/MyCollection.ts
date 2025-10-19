import type { CollectionConfig } from 'payload'

export const MyCollection: CollectionConfig = {
  slug: 'mycollection',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    update: () => true,
    admin: () => true,
    create: () => true,
    delete: () => true,
  },
  fields: [
    {
      type: 'text',
      name: 'name',
      required: true,
      access: {
        read: () => true,
        update: () => true,
        create: () => true,
      },
    },
  ],
}
