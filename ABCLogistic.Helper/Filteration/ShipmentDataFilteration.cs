using Kendo.Mvc.Infrastructure;
using Kendo.Mvc;
using System.Collections;
using System.Collections.Generic;

using ABCLogistic.ViewModels.Shipment;

namespace ABCLogistic.Helper.Filteration;

public static class AssignHomeworkCustomBinding
{
    private enum ShipmentFields
    {
        SenderName,
        Expedited,
        ShipmentType
    }

    public static IQueryable<ShipmentViewModel> ApplyFiltering(this IQueryable<ShipmentViewModel> data,
        IList<IFilterDescriptor> filterDescriptors)
    {
        if (filterDescriptors.Any())
        {
            data = data.Where(ExpressionBuilder.Expression<ShipmentViewModel>(filterDescriptors));
        }

        return data;
    }

    public static IEnumerable ApplyGrouping(this IQueryable<ShipmentViewModel> data,
        IList<GroupDescriptor> groupDescriptors)
    {
        Func<IEnumerable<ShipmentViewModel>, IEnumerable<AggregateFunctionsGroup>> selector = null;

        foreach (var group in groupDescriptors.Reverse())
        {
            var subCategoryEnum = GetCategoryFieldEnum(group.Member);
            if (selector == null)
            {
                selector = subCategoryEnum switch
                {
                    ShipmentFields.ShipmentType => orders =>
                        BuildInnerGroup(orders, o => o.ShipmentType, group.Member),
                    ShipmentFields.SenderName => orders =>
                        BuildInnerGroup(orders, o => o.SenderName, group.Member),
                    ShipmentFields.Expedited => orders => BuildInnerGroup(orders, o => o.Expedited, group.Member),
                    _ => selector
                };
            }
            else
            {
                selector = subCategoryEnum switch
                {
                    ShipmentFields.ShipmentType => orders =>
                        BuildInnerGroup(orders, o => o.ShipmentType, group.Member),
                    ShipmentFields.SenderName => orders =>
                        BuildInnerGroup(orders, o => o.SenderName, group.Member),
                    ShipmentFields.Expedited => orders => BuildInnerGroup(orders, o => o.Expedited, group.Member),
                    _ => selector
                };
            }
        }

        return selector?.Invoke(data)?.ToList();
    }

    private static Func<IEnumerable<ShipmentViewModel>, IEnumerable<AggregateFunctionsGroup>> BuildGroup<T>(
        Func<ShipmentViewModel, T> groupSelector,
        Func<IEnumerable<ShipmentViewModel>, IEnumerable<AggregateFunctionsGroup>> selectorBuilder, string value)
    {
        var tempSelector = selectorBuilder;

        return g => g.GroupBy(groupSelector)
            .Select(c => new AggregateFunctionsGroup
            {
                Key = c.Key,
                Member = value,
                HasSubgroups = true,
                Items = tempSelector.Invoke(c).ToList()
            });
    }

    private static IEnumerable<AggregateFunctionsGroup> BuildInnerGroup<T>(IEnumerable<ShipmentViewModel> group,
        Func<ShipmentViewModel, T> groupSelector, string value)
    {
        return group.GroupBy(groupSelector)
            .Select(i => new AggregateFunctionsGroup
            {
                Key = i.Key,
                Member = value,
                Items = i.ToList()
            });
    }

    public static IQueryable<ShipmentViewModel> ApplyPaging(this IQueryable<ShipmentViewModel> data,
        int currentPage, int pageSize)
    {
        if (pageSize > 0 && currentPage > 0)
        {
            data = data.Skip((currentPage - 1) * pageSize);
        }

        data = data.Take(pageSize);
        return data;
    }

    public static IQueryable<ShipmentViewModel> ApplySorting(this IQueryable<ShipmentViewModel> data,
        IList<GroupDescriptor> groupDescriptors, IList<SortDescriptor> sortDescriptors)
    {
        if (groupDescriptors.Any())
        {
            data = groupDescriptors.Reverse().Aggregate(data, (current, groupDescriptor) =>
                AddSortExpression(current, groupDescriptor.SortDirection, groupDescriptor.Member));
        }

        if (sortDescriptors.Any())
        {
            data = sortDescriptors.Aggregate(data, (current, sortDescriptor) =>
                AddSortExpression(current, sortDescriptor.SortDirection, sortDescriptor.Member));
        }

        return data;
    }

    private static IQueryable<ShipmentViewModel> AddSortExpression(IQueryable<ShipmentViewModel> data,
        ListSortDirection sortDirection, string memberName)
    {
        var subCategoryEnum = GetCategoryFieldEnum(memberName);
        if (sortDirection == ListSortDirection.Ascending)
        {
            data = subCategoryEnum switch
            {
                ShipmentFields.SenderName => data.OrderBy(order => order.SenderName),
                ShipmentFields.ShipmentType => data.OrderBy(order => order.ShipmentType),
                ShipmentFields.Expedited => data.OrderBy(order => order.Expedited),
                _ => data
            };
        }
        else
        {
            data = subCategoryEnum switch
            {
                ShipmentFields.SenderName => data.OrderBy(order => order.SenderName),
                ShipmentFields.ShipmentType => data.OrderBy(order => order.ShipmentType),
                ShipmentFields.Expedited => data.OrderBy(order => order.Expedited),
                _ => data
            };
        }

        return data;
    }

    private static ShipmentFields GetCategoryFieldEnum(string value)
    {
        Enum.TryParse<ShipmentFields>(value, true, out var result);

        return result;
    }
}