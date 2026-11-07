import { Form } from '@inertiajs/react';
import type { ReactNode } from 'react';

import StoreController from '@/actions/App/Http/Controllers/StoreController';
import { Button } from '@/components/marketplace/button';
import type { StoreSummary } from '@/types/store';

type StoreFormProps = {
    store?: StoreSummary;
};

function StoreForm({ store }: StoreFormProps) {
    const form = store
        ? StoreController.update.form(store.id)
        : StoreController.store.form();

    return (
        <Form
            {...form}
            encType="multipart/form-data"
            options={{ preserveScroll: true }}
            className="flex flex-col gap-md"
        >
            {({ errors, processing }) => (
                <>
                    <Field
                        error={errors.title}
                        id="title"
                        label="Store title"
                        name="title"
                        defaultValue={store?.title ?? ''}
                        placeholder="Your creator brand"
                        required
                    />

                    <div className="flex flex-col gap-xs">
                        <label
                            htmlFor="description"
                            className="font-label-mono text-label-mono font-bold uppercase"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            defaultValue={store?.description ?? ''}
                            placeholder="Tell buyers what your store creates"
                            required
                            rows={5}
                            className="border-[3px] border-on-background bg-surface px-sm py-xs outline-none placeholder:text-on-surface-variant/70 focus:bg-primary-fixed focus:ring-0"
                        />
                        {errors.description && (
                            <p className="text-sm text-error">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    {!store && (
                        <Field
                            error={errors.subdomain}
                            id="subdomain"
                            label="Permanent subdomain"
                            name="subdomain"
                            placeholder="your-store"
                            required
                        />
                    )}

                    {store && (
                        <div className="flex flex-col gap-xs">
                            <span className="font-label-mono text-label-mono font-bold uppercase">
                                Permanent subdomain
                            </span>
                            <div className="border-[3px] border-dashed border-on-background bg-surface-container-low px-sm py-xs font-label-mono text-label-mono text-on-surface-variant">
                                {store.subdomain}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col gap-xs">
                        <label
                            htmlFor="profile_image"
                            className="font-label-mono text-label-mono font-bold uppercase"
                        >
                            Profile image
                        </label>
                        <input
                            id="profile_image"
                            name="profile_image"
                            type="file"
                            accept="image/*"
                            className="border-[3px] border-on-background bg-surface p-xs font-label-mono text-label-mono file:mr-sm file:border-0 file:bg-primary file:px-sm file:py-xs file:font-label-mono file:text-on-primary"
                        />
                        <p className="text-sm text-on-surface-variant">
                            Optional. You can add or replace it later.
                        </p>
                        {errors.profile_image && (
                            <p className="text-sm text-error">
                                {errors.profile_image}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center gap-sm pt-xs">
                        <Button
                            type="submit"
                            disabled={processing}
                            className="px-md py-sm font-headline-md text-headline-md"
                        >
                            {processing
                                ? 'Saving...'
                                : store
                                  ? 'Save Changes'
                                  : 'Create Store'}
                        </Button>
                    </div>
                </>
            )}
        </Form>
    );
}

function Field({
    defaultValue,
    error,
    id,
    label,
    name,
    placeholder,
    required,
}: {
    defaultValue?: string;
    error?: string;
    id: string;
    label: string;
    name: string;
    placeholder: string;
    required?: boolean;
}): ReactNode {
    return (
        <div className="flex flex-col gap-xs">
            <label
                htmlFor={id}
                className="font-label-mono text-label-mono font-bold uppercase"
            >
                {label}
            </label>
            <input
                id={id}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                required={required}
                className="border-[3px] border-on-background bg-surface px-sm py-xs outline-none placeholder:text-on-surface-variant/70 focus:bg-primary-fixed focus:ring-0"
            />
            {error && <p className="text-sm text-error">{error}</p>}
        </div>
    );
}

export { StoreForm };
